# Checklist Manual de Regressão — OliverTech Portfolio

Este checklist destina-se à validação manual completa de qualidade (QA), internacionalização (i18n), acessibilidade e estabilidade visual do portfólio OliverTech antes de qualquer publicação ou release em produção.

---

## 1. Internacionalização & Ciclo de Vida do Idioma

- [ ] **Alternar de PT para EN**: Clicar no botão `EN` da barra de navegação e confirmar que a transição é instantânea, sem recarregar a página e sem quebras visuais.
- [ ] **Alternar de EN para PT**: Clicar no botão `PT` e confirmar que todo o conteúdo retorna integralmente para o português correto.
- [ ] **Persistência no localStorage**: Inspecionar o Application Storage do navegador e confirmar que a chave `oliver_tech_pref_lang` armazena o valor `'pt'` ou `'en'` correspondente à seleção do usuário.
- [ ] **Atualização de página em PT**: Com o idioma PT ativo, recarregar a página (F5 / Ctrl+R) e verificar se o idioma selecionado é preservado.
- [ ] **Atualização de página em EN**: Com o idioma EN ativo, recarregar a página (F5 / Ctrl+R) e verificar se o idioma selecionado é preservado.
- [ ] **Verificação do atributo `html lang`**:
  - [ ] Em PT: Confirmar que `<html lang="pt-BR">` está definido.
  - [ ] Em EN: Confirmar que `<html lang="en-US">` está definido.
- [ ] **Verificação de Título e Metadescrição**:
  - [ ] Em PT: `document.title` exibe `"Oliver Souza // Sustentação de Sistemas, APIs & Produtos Digitais"` e `<meta name="description">` contém a descrição em português.
  - [ ] Em EN: `document.title` exibe `"Oliver Souza // Systems Support, APIs & Digital Products"` e `<meta name="description">` contém a descrição em inglês.

---

## 2. Navegação & Componentes de Layout

- [ ] **Menu Desktop**:
  - [ ] Revisar todos os links de navegação em PT (*Início*, *Sobre*, *Experiência*, *Projetos*, *Conhecimentos*, *OliverTech*, *Contato*).
  - [ ] Revisar todos os links de navegação em EN (*Home*, *About*, *Experience*, *Projects*, *Skills*, *OliverTech*, *Contact*).
  - [ ] Verificar rolagem suave para as seções correspondentes via clique nos links.
  - [ ] Verificar botão CTA (*Vamos conversar* em PT / *Let's talk* em EN) direcionando para a seção de contato.
- [ ] **Menu Mobile**:
  - [ ] Reduzir a viewport para `< 1024px` e testar a abertura do menu hambúrguer.
  - [ ] Verificar se os links estão no idioma ativo e fecham o menu após o clique.
  - [ ] Testar fechamento pelo botão `X`.
  - [ ] Confirmar ausência de sobreposição ou travamento do scroll.
- [ ] **Rodapé (`Footer`)**:
  - [ ] Verificar autoria (*Oliver Souza*).
  - [ ] Confirmar se o ano exibido é calculado dinamicamente com o ano corrente.
  - [ ] Testar botão de retorno ao topo (*RETORNAR AO TOPO ↑* / *BACK TO TOP ↑*) com rolagem suave.
  - [ ] Verificar textos de status do sistema e tecnologias utilizadas nos dois idiomas.

---

## 3. Revisão de Conteúdo por Seção

- [ ] **Início / Hero**:
  - [ ] Verificar rótulos técnicos, comando do terminal e CTAs em ambos os idiomas.
  - [ ] Confirmar os 4 indicadores técnicos (sem números inventados).
  - [ ] Confirmar carregamento nítido da foto de perfil integrada na moldura tecnológica assimétrica sem distorções.
- [ ] **Sobre (`About`)**:
  - [ ] Em PT: Título `SOBRE_MIM`, subtítulo, parágrafos narrativos, quadro de experiências anteriores e 4 pilares.
  - [ ] Em EN: Título `ABOUT_ME`, subtítulo, parágrafos em inglês, `PREVIOUS EXPERIENCE` e pilares traduzidos.
  - [ ] Confirmar que o DocPed no quadro de experiências anteriores está descrito como documentação pedagógica e clínica (sem referência a "saúde infantil").
- [ ] **Experiência (`Experience`)**:
  - [ ] **Itaú Unibanco**:
    - [ ] Em PT: `INSTITUIÇÃO FINANCEIRA // OPERAÇÃO CRÍTICA`, `Analista Jr. de Engenharia de TI`, datas, cabeçalho de atividades de sustentação e diagnóstico.
    - [ ] Em EN: `FINANCIAL INSTITUTION // CRITICAL OPERATIONS`, `Junior IT Engineering Analyst`, `October 2021 to February 2024`, lista e ferramentas traduzidas.
  - [ ] **Banrisul**:
    - [ ] Em PT: `SETOR BANCÁRIO // AGÊNCIA PRESENCIAL`, `Atendimento e Operações Bancárias`, competências e rotinas em agência.
    - [ ] Em EN: `BANKING // IN-PERSON BRANCH`, `Customer Service & Banking Operations`, competências traduzidas (*Customer Service*, *Document Verification*, etc.).
  - [ ] **DocPed (Linha do Tempo)**:
    - [ ] Confirmar dados coerentes: *DocPed — Documentação Pedagógica e Clínica* (PT) / *DocPed — Pedagogical and Clinical Documentation* (EN).
    - [ ] Confirmar stack real exibida: `React 18`, `TypeScript`, `Vite`, `Tailwind CSS`, `Supabase`, `PostgreSQL`, `Google Gemini API`, `Vitest`.
    - [ ] Garantir ausência total de referências a Next.js 15, Prisma ORM, Stripe API e Zod.
- [ ] **Projeto em Destaque — DocPed (`FeaturedProject`)**:
  - [ ] Verificar títulos e abas da composição visual (*DocPed — Página Inicial* e *DocPed — Tela de Cadastro / Acesso* em PT; *DocPed — Landing Page* e *DocPed — Sign-Up / Access* em EN).
  - [ ] Testar alternância entre primeiro e segundo plano ao clicar nos cards sobrepostos.
  - [ ] Abrir modal lightbox de ampliação e fechar pelo botão `X` ou clicando no backdrop.
  - [ ] Verificar títulos: *O Problema*, *A Solução DocPed*, *Funcionalidades da Plataforma*, *Diretrizes de Privacidade*, *QA (29 Testes Unitários)* e *Tecnologias & Arquitetura* em ambos os idiomas.
  - [ ] Confirmar que as tecnologias reais permanecem inalteradas.
- [ ] **Conhecimentos / Skills**:
  - [ ] Verificar os quatro grupos técnicos (*Sustentação e Observabilidade*, *APIs e Dados*, *Desenvolvimento*, *Estudando atualmente*).
  - [ ] Confirmar que não existem porcentagens de domínio arbitrárias.
  - [ ] Verificar badge de avaliação transparente nos dois idiomas.
- [ ] **OliverTech**:
  - [ ] Verificar títulos das 4 séries:
    - [ ] Em PT: *MEMÓRIA TECH*, *PROJETOS*, *TECH PELO MUNDO*, *CARREIRA.LOG*.
    - [ ] Em EN: *TECH MEMORY*, *PROJECTS*, *TECH AROUND THE WORLD*, *CAREER.LOG*.
  - [ ] Confirmar preservação da marca `OLIVERTECH.LOG`.
  - [ ] Interagir com o terminal interativo:
    - [ ] Testar comando `ajuda` / `help`.
    - [ ] Testar comando `docped`.
    - [ ] Testar comando `itau`.
    - [ ] Testar comando `banrisul`.
    - [ ] Testar comando `limpar` / `clear`.
    - [ ] Verificar que as respostas do terminal refletem o idioma atualmente selecionado.
- [ ] **Contato**:
  - [ ] Em PT: Título `INICIAR_CONVERSA`, tag de status `ESPAÇO RESERVADO`, rótulo `E-mail profissional` e valor `[A ser inserido posteriormente]`.
  - [ ] Em EN: Título `START_CONVERSATION`, tag de status `RESERVED SPACE`, rótulo `Professional E-mail` e valor `[To be inserted later]`.
  - [ ] Confirmar que não existe formulário fictício sem backend.

---

## 4. Links Externos & Segurança

- [ ] **LinkedIn**: Clicar no link de LinkedIn e confirmar que abre em nova aba (`target="_blank"`) com `rel="noopener noreferrer"`.
- [ ] **GitHub**: Clicar no link de GitHub e confirmar que abre em nova aba com proteção adequada.
- [ ] **Instagram**: Clicar no link de Instagram do OliverTech e confirmar que abre em nova aba com proteção adequada.
- [ ] **DocPed App**: Clicar no link de acesso ao DocPed e confirmar que abre em nova aba com proteção adequada.

---

## 5. Acessibilidade (A11y) & Navegação por Teclado

- [ ] **Navegação por Teclado (Tab / Shift+Tab)**:
  - [ ] Percorrer a página inteira usando apenas o teclado.
  - [ ] Verificar foco visível claro em todos os links, botões, formulário do terminal e interações do DocPed.
  - [ ] Verificar acionamento por tecla `Enter` e `Espaço`.
- [ ] **Textos Alternativos (`alt`) em Imagens**:
  - [ ] Foto de perfil: Alt descritivo no idioma ativo.
  - [ ] DocPed Home: Alt descritivo no idioma ativo.
  - [ ] DocPed Login: Alt descritivo no idioma ativo.
  - [ ] Lightbox: Alt descritivo no idioma ativo.
- [ ] **Rótulos ARIA (`aria-label` / `aria-expanded`)**:
  - [ ] Menu principal: `mainNavAria` devidamente traduzido.
  - [ ] Botão do menu mobile: `aria-expanded` alterna entre `true`/`false` e `aria-label` reflete o estado e idioma.
  - [ ] Terminal: Input e botão com `aria-label` traduzidos.
  - [ ] Seletor de idioma: Grupo ARIA com `aria-pressed` correto no botão ativo.

---

## 6. Responsividade & Visual QA

- [ ] **Dispositivos Móveis (320 px a 480 px)**:
  - [ ] Inspecionar em 320 px (largura mínima crítica).
  - [ ] Verificar ausência total de rolagem horizontal indesejada (`overflow-x`).
  - [ ] Confirmar empilhamento agradável da foto de perfil e do texto no Hero.
  - [ ] Confirmar legibilidade dos cards da linha do tempo e do DocPed sem sobreposição ou corte de textos.
- [ ] **Tablets (768 px a 1024 px)**:
  - [ ] Verificar transição entre grids de 1 e 2 colunas.
  - [ ] Verificar disposição do menu e seletor de idioma.
- [ ] **Desktops e Monitores Amplos (1280 px a 4K)**:
  - [ ] Verificar centralização adequada dentro do container `max-w-7xl`.
  - [ ] Confirmar alinhamento das seções e fluidez dos gradientes e malha técnica.

---

## 7. Build & Verificação Técnica

- [ ] **Execução do Build de Produção**:
  - [ ] Executar `npm run build` no terminal.
  - [ ] Confirmar que `tsc -b` passa sem qualquer erro de tipagem.
  - [ ] Confirmar que o Vite compila todos os módulos e gera os bundles em `dist/`.
  - [ ] Código de saída do processo deve ser obrigatoriamente `0`.
