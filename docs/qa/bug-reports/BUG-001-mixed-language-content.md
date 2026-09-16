# Relatório de Defeito: BUG-001

## Identificação
* **ID**: BUG-001
* **Título**: Conteúdo com mistura de idiomas (PT/EN) ao alternar para a versão em inglês
* **Status Final**: RESOLVIDO (FECHADO)
* **Severidade**: Média (degradação da experiência do usuário e inconsistência visual/textual para público internacional)
* **Prioridade**: Alta (requisito funcional central para apresentação a recrutadores e clientes internacionais)

---

## Contexto
O portfólio OliverTech foi concebido para ser uma aplicação bilíngue (Português e Inglês). Ao carregar a aplicação e utilizar o seletor de idioma para ativar o modo inglês (`EN`), observou-se que os blocos de texto principais (parágrafos narrativos) mudavam para o inglês, porém diversos elementos de interface permaneciam em português, incluindo títulos de seções, badges de status, datas, listas de atividades, rótulos de caixas, atributos `alt` de imagens e atributos `aria-label` de acessibilidade. Além disso, havia dados conceituais e técnicos divergentes no card do DocPed na linha do tempo.

---

## Ambiente
* **Aplicação**: OliverTech Portfolio (SPA)
* **Stack**: React 19, TypeScript, Vite, Tailwind CSS
* **Navegadores**: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari
* **Resoluções testadas**: 320 px (Mobile), 768 px (Tablet), 1280 px (Desktop), 1920 px (Full HD)
* **Sistema Operacional**: Windows / Multiplataforma

---

## Pré-condições
1. Aplicação executando localmente (`npm run dev`) ou servida via build de produção (`npm run preview`).
2. Acessar a raiz da aplicação.
3. Seletor de idioma visível na barra de navegação superior (`Navbar`).

---

## Passos para Reprodução
1. Abrir a aplicação em um navegador.
2. Clicar no botão `EN` no componente seletor de idiomas (`LanguageSwitch`).
3. Percorrer a página a partir da seção Hero até o Rodapé.
4. Observar os títulos das seções, cabeçalhos de atividades, badges, textos dentro do card de contato, textos alternativos e leitor de tela.

---

## Resultado Observado
A interface apresentava um estado híbrido inconsistente:
* **Sobre**: O título da seção exibia `SOBRE_MIM` em vez de `ABOUT_ME`. No quadro de experiências anteriores, o rodapé exibia `"Engenharia de Computação & Formação Interdisciplinar"`.
* **Experiência**: 
  * Os badges e cabeçalhos de atividades exibiam `// PONTOS DE DESTAQUE & ATIVIDADES` e `// CONTEXTO TÉCNICO & FERRAMENTAS:` fixos em português.
  * O período do Itaú Unibanco exibia `"Outubro de 2021 a fevereiro de 2024"`.
  * O card do DocPed na linha do tempo exibia informações desatualizadas/incompatíveis e descrição conceitualmente imprecisa.
* **Projeto em Destaque (DocPed)**:
  * Rótulos da composição visual e títulos como `"O PROBLEMA"`, `"A SOLUÇÃO DOCPED"`, `"Funcionalidades da Plataforma"`, `"GARANTIA DE QUALIDADE (QA)"` e `"DIRETRIZES DE PRIVACIDADE & RESPONSABILIDADE"` permaneciam em português.
  * Imagens mantinham `alt` estático em português (`"DocPed Página Inicial em Destaque"`).
* **OliverTech**:
  * Título das séries exibia `"SÉRIES EDITORIAIS DO PROJETO"`.
  * Títulos individuais das séries permaneciam em português (`"MEMÓRIA TECH"`, `"TECH PELO MUNDO"`).
* **Contato**:
  * Badge de status exibia `"ESPAÇO RESERVADO"` de forma fixa.
* **Acessibilidade**:
  * Elementos `nav`, botões de menu mobile e formulário do console interativo possuíam `aria-label` estáticos em português.

---

## Resultado Esperado
Ao ativar a versão `EN`, 100% dos textos textuais, títulos, subtítulos, badges, datas, listas, mensagens do terminal, atributos `alt` e rótulos de acessibilidade (`aria-label`) devem ser apresentados em inglês fluente e correto, sem qualquer texto residual em português, preservando integralmente a identidade visual, layout, classes Tailwind e responsividade. Da mesma forma, ao retornar para `PT`, a interface deve refletir integralmente o português correto.

---

## Evidências Disponíveis
* Capturas de tela e auditoria de código reportadas durante a análise inicial.
* Inspecção estática de strings JSX nos componentes `ExperienceSection.tsx`, `ContactSection.tsx`, `FeaturedProject.tsx`, `Navbar.tsx` e `InteractiveConsole.tsx`.
* Inspecção do arquivo `src/data/content.ts` revelando chaves em português dentro do nó `content.en`.

---

## Causa Técnica Identificada
1. **Strings Hardcoded em JSX**: Alguns componentes continham expressões ternárias ou strings literais fixas em português diretamente no código de renderização, ignorando o dicionário de idiomas.
2. **Incompletude no Dicionário EN (`src/data/content.ts`)**: Determinadas propriedades dentro do objeto `en` mantinham valores copiados em português (`SOBRE_MIM`, nomes de séries editoriais do OliverTech, etc.).
3. **Ausência de Propriedades de Acessibilidade no Modelo de Tipos**: Atributos `aria-label` e `alt` não estavam mapeados na tipagem `PortfolioContent` / `uiLabels`.
4. **Divergência de Dados do DocPed**: O card da linha do tempo possuía referências legadas que não condiziam com a arquitetura real do projeto (React 18, Vite, Supabase, PostgreSQL, Gemini API, Vitest).

---

## Arquivos Afetados
1. `src/types/index.ts`
2. `src/data/content.ts`
3. `src/components/sections/ExperienceSection.tsx`
4. `src/components/sections/ContactSection.tsx`
5. `src/components/sections/FeaturedProject.tsx`
6. `src/components/layout/Navbar.tsx`
7. `src/components/ui/InteractiveConsole.tsx`

---

## Solução Aplicada
1. **Extensão de Tipos**: Adicionados campos opcionais em `src/types/index.ts` para textos de acessibilidade, cabeçalhos específicos da linha do tempo e atributos de imagem.
2. **Revisão e Tradução do Dicionário**:
   * Correção de todas as entradas do nó `en` em `src/data/content.ts`, com tradução fiel das seções Sobre, Experiência, DocPed, OliverTech e Contato.
   * Tradução dos rótulos em `pt.contact` que se encontravam em inglês (`"E-mail profissional"`, `"[A ser inserido posteriormente]"`, `"CANAIS OFICIAIS"`).
   * Alinhamento completo da stack do DocPed na experiência com os dados reais confirmados: `React 18`, `TypeScript`, `Vite`, `Tailwind CSS`, `Supabase`, `PostgreSQL`, `Google Gemini API`, `Vitest`.
3. **Refatoração Cirúrgica de Componentes**:
   * Substituição de strings literais por propriedades do dicionário ou fallbacks dinâmicos.
   * Vinculação dos textos alternativos e rótulos ARIA ao idioma ativo.
   * Sincronização reativa do console interativo para resetar as mensagens de boas-vindas na troca de idioma.

---

## Critérios de Aceite
* [x] Selecionar `EN` exibe 100% da interface em inglês, sem strings residuais em português.
* [x] Selecionar `PT` exibe 100% da interface em português, sem termos residuais em inglês.
* [x] DocPed não é apresentado como "SaaS em Saúde Pediátrica" ou "saúde infantil".
* [x] Card do DocPed na linha do tempo utiliza a stack real confirmada, sem Next.js 15, Prisma, Stripe ou Zod.
* [x] Nenhuma alteração de layout, CSS Tailwind, animação, modal lightbox, terminal ou quebra de responsividade foi introduzida.
* [x] O build de produção (`npm run build`) compila com código de saída 0 sem erros de TypeScript.

---

## Reteste
* **Compilação TypeScript & Vite**: Executado `npm run build` (`tsc -b && vite build`) &rarr; **Sucesso (código de saída 0)**.
* **Auditoria Automatizada de Dicionário**: Script executado via Python inspecionou as chaves de `content.ts` &rarr; **Zero ocorrências de português em EN e zero ocorrências de inglês em PT**.
* **Varredura de Componentes**: Script inspecionou todos os arquivos `.tsx` em `src/` &rarr; **Zero strings literais sem binding de internacionalização**.
* **Persistência de Idioma**: Validado que a chave `oliver_tech_pref_lang` é gravada no `localStorage` e recuperada corretamente na inicialização.

---

## Possíveis Riscos de Regressão
* **Variação no comprimento dos textos**: Textos em inglês possuem comprimentos diferentes dos equivalentes em português. Foi verificado que os containers utilizam `flex-wrap`, larguras fluidas e `break-words` para evitar overflow ou quebra de layout.
* **Consistência de dados futuros**: Ao adicionar novas seções ou itens à linha do tempo, a equipe deve manter as tipagens em `src/types/index.ts` e preencher simultaneamente os blocos `pt` e `en` em `src/data/content.ts`.

---

## Status Final
**FECHADO / VERIFICADO**. A correção foi aplicada de forma cirúrgica e o comportamento atende integralmente a todos os critérios de qualidade e acessibilidade.
