# Relatório de Defeito: BUG-002

## Identificação
* **ID**: BUG-002
* **Título**: Deslocamento indevido de rolagem (scroll jump) ao alternar idioma para a região do terminal e seção de contato
* **Data**: 15 de setembro de 2026
* **Status Final**: RESOLVIDO / VERIFICADO
* **Severidade**: Alta (impacto direto na usabilidade e desorientação espacial do usuário durante a navegação)
* **Prioridade**: Alta (comportamento anômalo global presente em qualquer seção e viewport ao interagir com o seletor de idiomas)

---

## Resumo Executivo
Ao alternar o idioma da aplicação entre Português (`PT`) e Inglês (`EN`) através dos botões do `LanguageSwitch` (na barra de navegação desktop ou no menu responsivo mobile), a página executava um salto suave de rolagem (*smooth scroll jump*) automático, transportando a janela de visualização do visitante até o console interativo na seção OliverTech (`#olivertech`) e início da seção de Contato (`#contato`). 

A investigação técnica comprovou que o seletor de idiomas e a barra de navegação não continham links âncora nem mutações de hash. A causa raiz residia em um efeito colateral (*side-effect*) no componente `src/components/ui/InteractiveConsole.tsx`: a troca de idioma atualizava o array de histórico de boas-vindas do terminal, disparando uma chamada nativa `endRef.current?.scrollIntoView({ behavior: 'smooth' })`. Pela especificação do DOM do W3C/WHATWG, `scrollIntoView` rola todos os containers ancestrais do elemento até que ele fique visível na janela principal do navegador (*window viewport*).

A correção cirúrgica removeu a invocação de `scrollIntoView` sobre a janela global e implementou o controle de rolagem restrito exclusivamente ao container interno do terminal (`terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight`), acionado apenas quando o usuário submete um comando interativo.

---

## Ambiente
* **Aplicação**: OliverTech Portfolio (SPA)
* **Stack**: React 19, TypeScript, Vite, Tailwind CSS
* **Navegadores validados**: Google Chrome (via Chrome DevTools Protocol / Headless), Chromium
* **Viewports testados**:
  * Desktop: 1280 x 800 px
  * Mobile: 375 x 667 px (dispositivo móvel emulado com touch e pixel ratio 2x)
* **Sistema Operacional**: Windows / Multiplataforma

---

## Pré-condições
1. Aplicação em execução local (`npm run dev`) ou servida via build de produção.
2. Visitante posicionado em qualquer seção do portfólio (ex.: Topo/Hero, Sobre, Experiência, DocPed, Conhecimentos).
3. Seletor de idiomas acessível e interativo.

---

## Comportamento Observado Antes da Correção

Ao clicar no botão de alternância de idioma (`EN` ou `PT`):
1. **Desktop**:
   * Estando no topo da página (`scrollY: 0`), ao clicar em `EN`, o scroll da janela iniciava uma animação fluida contínua.
   * Em ~100 ms, o deslocamento atingia 38 px; em 500 ms alcançava 4749 px; e ao redor de 1000 ms estabilizava em 7212 px.
   * O usuário era arremessado para o final da página, na altura do terminal da seção OliverTech (offset 6991 px) e topo de Contato (offset 7975 px).
   * O mesmo salto ocorria na direção inversa (`EN` &rarr; `PT`).
2. **Mobile (375 px)**:
   * Estando no topo da página (`scrollY: 0`), ao alternar idioma, a janela descia automaticamente até a região do terminal/contato (offset móvel ~12625 px / 14469 px).
3. **Seções Intermediárias**:
   * Estando o visitante lendo a seção "Sobre" ou "Experiência", a troca de idioma o arrancava da leitura e o forçava para a região do terminal.
4. **Análise de Foco e URL**:
   * A URL hash permanecia inalterada (`window.location.hash === ""`).
   * O elemento ativo no DOM permanecia no botão clicado ou no `BODY`, confirmando que o salto não era provocado por `focus()` de formulário nem por navegação de âncora `href="#contato"`.

---

## Causa Raiz Técnica Comprovada

A causa raiz foi isolada e diagnosticada no componente `src/components/ui/InteractiveConsole.tsx`:

```tsx
// Trecho original com defeito em src/components/ui/InteractiveConsole.tsx:
const endRef = useRef<HTMLDivElement>(null);

// Efeito 1: Sincroniza mensagens iniciais com a mudança de idioma
useEffect(() => {
  setHistory([
    { text: t.systemReady, type: 'system' },
    { text: t.helpPrompt, type: 'system' },
  ]);
}, [language]);

// Efeito 2: Executava scrollIntoView sempre que 'history' mudava
useEffect(() => {
  endRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [history]);
```

### Mecanismo do Defeito:
1. O usuário clica no seletor de idioma no topo da página.
2. O estado global `language` é alterado no `LanguageContext`.
3. Todos os componentes consumidores se renderizam com o novo idioma.
4. O componente `InteractiveConsole`, montado mais abaixo na seção OliverTech, detecta a alteração de `language` e reatribui o `history` com as mensagens traduzidas.
5. O segundo `useEffect` detecta a mutação da referência `history` e executa:
   `endRef.current?.scrollIntoView({ behavior: 'smooth' });`
6. De acordo com a especificação do DOM, chamar `scrollIntoView()` em um elemento filho rola **todos os ancestrais roláveis**, incluindo o elemento raiz da página (`document.documentElement` / `window`), forçando a página inteira a rolar até o terminal.

---

## Medição da Rolagem (Valores Reais Antes e Depois)

As medições foram coletadas via instrumentação com Chrome DevTools Protocol (CDP) conectado à instância de execução da aplicação:

### 1. Posições de Referência dos Elementos (Offsets)
* **Desktop (1280x800 px)**:
  * `#inicio`: 0 px
  * `#sobre`: 783 px
  * `#experiencia`: 2148 px
  * `#projetos`: 4236 px
  * `#conhecimentos`: 6121 px
  * `#olivertech` (Terminal): 6991 px
  * `#contato`: 7975 px
* **Mobile (375x667 px)**:
  * `#inicio`: 0 px
  * `#sobre`: 1300 px
  * `#experiencia`: 4032 px
  * `#projetos`: 7522 px
  * `#conhecimentos`: 10501 px
  * `#olivertech` (Terminal): 12625 px
  * `#contato`: 14469 px

### 2. Tabela Comparativa de Rolagem

| Cenário de Teste | Viewport | scrollY Inicial | scrollY Final (Antes da Correção) | Deslocamento Antes | scrollY Final (Depois da Correção) | Deslocamento Depois | Comportamento Pós-Correção |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Topo: PT &rarr; EN** | Desktop (1280px) | 0 px | **7212 px** | **+7212 px (Salto p/ Terminal)** | **0 px** | **0 px** | Perfeita imobilidade no topo |
| **Topo: EN &rarr; PT** | Desktop (1280px) | 0 px | **7212 px** | **+7212 px (Salto p/ Terminal)** | **0 px** | **0 px** | Perfeita imobilidade no topo |
| **Sobre: PT &rarr; EN** | Desktop (1280px) | 783 px | **7212 px** | **+6429 px (Salto p/ Terminal)** | **783 px** | **0 px** | Permanece na seção Sobre |
| **Experiência: EN &rarr; PT** | Desktop (1280px) | 2148 px | **7212 px** | **+5064 px (Salto p/ Terminal)** | **2163 px** | **+15 px\*** | Permanece na seção Experiência |
| **Topo: PT &rarr; EN** | Mobile (375px) | 0 px | **12625 px** | **+12625 px (Salto p/ Terminal)** | **0 px** | **0 px** | Perfeita imobilidade no topo |
| **Topo: EN &rarr; PT** | Mobile (375px) | 0 px | **12625 px** | **+12625 px (Salto p/ Terminal)** | **0 px** | **0 px** | Perfeita imobilidade no topo |

*\* Nota técnica: Pequenas variações de até ~15 px em seções intermediárias decorrem exclusivamente da diferença de comprimento de texto natural entre a língua inglesa e a língua portuguesa, sem qualquer salto de seção.*

---

## Solução Técnica Implementada

A solução adotada preservou 100% da arquitetura existente, eliminando o efeito colateral sem utilizar "hacks" de reposicionamento forçado (como `window.scrollTo` reativo) ou desativação de recursos.

1. **Remoção do `scrollIntoView` global**:
   * Descartado o `endRef.current?.scrollIntoView({ behavior: 'smooth' })` que impactava a janela principal.
2. **Isolamento de rolagem interna do terminal**:
   * Criada a referência `terminalOutputRef = useRef<HTMLDivElement>(null)` vinculada exclusivamente à `div` interna com classe `overflow-y-auto` que contém as linhas do terminal.
   * O ajuste de rolagem interna foi posicionado unicamente dentro do método `handleCommand`:
     ```tsx
     terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
     ```
   * Desta forma, a rolagem automática acontece apenas quando o visitante digita e envia um comando (ex.: `help`, `skills`), rolando apenas o corpo interno do console e deixando o restante da página intocado.
3. **Tratamento limpo da troca de idioma**:
   * Ao alternar o idioma, o estado `history` do terminal recebe a nova saudação traduzida de forma reativa e pura, sem acionar nenhum método de rolagem do navegador.

---

## Arquivos Alterados
* [`src/components/ui/InteractiveConsole.tsx`](file:///c:/Users/Pichau/antigravity/site-pro-oliver-tech/src/components/ui/InteractiveConsole.tsx)
  * Remoção do `endRef` e do efeito colateral de rolagem global `scrollIntoView`.
  * Criação da referência `terminalOutputRef` e confinamento do `scrollTop` ao container do terminal durante execução de comandos.

---

## Plano de Testes Executado e Resultados

1. **Teste Automatizado de Rolagem (CDP)**:
   * Validação em Desktop (1280px) e Mobile (375px) em todas as seções.
   * **Resultado**: `jumpDelta = 0 px` no topo; seções intermediárias preservam ancoragem de leitura.
2. **Validação de Hash e URL**:
   * Inspeção de `window.location.hash` antes e após cliques no seletor.
   * **Resultado**: Hash permanece inalterado (`""`).
3. **Navegação por Teclado e Foco**:
   * Alternância de idioma com foco via teclado (`Tab` + `Enter`/`Space`).
   * **Resultado**: Foco permanece no botão do idioma selecionado; sem saltos indesejados de foco.
4. **Funcionamento do Console Interativo**:
   * Envio de comandos (`help`, `about`, `skills`, `clear`).
   * **Resultado**: O terminal rola internamente seu conteúdo até a última linha sem alterar a rolagem da página externa.
5. **Persistência de Idioma**:
   * Recarregamento da página após seleção de `EN` e de `PT`.
   * **Resultado**: Valor persistido em `localStorage` (`oliver_tech_pref_lang`) restaurado sem saltos de posição.
6. **Compilação e Verificação de Tipos**:
   * Executado `npm run build` (`tsc -b && vite build`).
   * **Resultado**: Compilação concluída com sucesso com código de saída 0 (zero erros e zero warnings de tipos).

---

## Riscos de Regressão e Estratégias de Mitigação
* **Risco**: Comandos longos no terminal não exibirem a última linha se o usuário digitar sucessivas instruções.
  * **Mitigação**: O container interno do terminal possui `overflow-y-auto` e atualiza `scrollTop = scrollHeight` imediatamente após o processamento de cada novo comando em `handleCommand`.
* **Risco**: Quebra de estilização ou layout retrô do console.
  * **Mitigação**: Nenhuma classe Tailwind CSS ou estrutura visual foi modificada; apenas a referência interna do container foi atualizada.

---

## Lições Aprendidas de Engenharia e QA
1. **Perigos do `scrollIntoView` em Componentes Isolados**: Métodos que afetam o viewport global nunca devem ser disparados em `useEffect` acoplados a estados globais compartilhados (como `language` ou `theme`), a menos que o objetivo expresso do componente seja atuar como controlador de navegação da página.
2. **Escopo Estrito de Rolagem**: Recursos como consoles, terminais, tabelas com rolagem e modais devem sempre limitar suas manipulações de rolagem ao seu próprio elemento container (`element.scrollTop`), preservando a soberania do `window` para o usuário.
3. **Medições Reais com CDP em QA**: Diagnósticos baseados em medições de milissegundos e leitura de `scrollY` via CDP revelam com precisão se um comportamento é salto abrupto, navegação por âncora, transferência de foco ou animação fluida disparada por efeito colateral.

---

## Status Final
**RESOLVIDO / VERIFICADO**. Defeito eliminado na fonte, com comportamento estável e testado em desktop e dispositivos móveis.
