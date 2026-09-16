# OliverTech — Portfólio Profissional

Portfólio profissional e tecnológico de **Oliver Souza**, engenheiro de computação com experiência prática em sustentação de sistemas, observabilidade, validação de APIs e operações no setor financeiro, além de criador de produtos digitais como o DocPed e do projeto editorial OliverTech.

A aplicação é uma Single Page Application (SPA) bilíngue (Português e Inglês), responsiva e moderna, projetada com estética inspirada em terminais e computação clássica aliada a padrões contemporâneos de interface, tipografia refinada e alta usabilidade.

---

## Objetivo do Portfólio

O projeto tem como metas centrais:
* Apresentar a trajetória técnica, acadêmica e operacional de Oliver Souza para recrutadores de QA, suporte de aplicações, sustentação e engenharia de software no Brasil e no exterior;
* Demonstrar competências no setor financeiro (Itaú Unibanco e Banrisul), com foco em confiabilidade, análise analítica de logs e mitigação de riscos;
* Apresentar o **DocPed**, Micro-SaaS autoral voltado para a estruturação assistida de documentos na Educação Inclusiva e no Neurodesenvolvimento;
* Compartilhar o projeto editorial **OliverTech**, dedicado à história da computação, cultura digital e experiências internacionais;
* Disponibilizar canais oficiais e diretos para oportunidades profissionais e conexões técnicas.

---

## Principais Seções

1. **Início (`HeroSection`)**: Apresentação principal com moldura HUD assimétrica com coordenadas visuais preservando a fotografia original, comandos simulados de terminal, indicadores técnicos honestos (sem percentuais inventados) e CTAs para navegação rápida.
2. **Sobre (`AboutSection`)**: Perfil interdisciplinar integrando Engenharia de Computação, Neurociência, Educação e Filosofia, destacando quatro pilares de atuação e síntese de histórico profissional.
3. **Experiência (`ExperienceSection`)**: Linha do tempo profissional detalhando atuações corporativas no Itaú Unibanco e Banrisul, além do desenvolvimento do DocPed, com responsabilidades reais, ferramentas e contextos operacionais.
4. **Projeto em Destaque (`FeaturedProject`)**: Estudo de caso aprofundado do DocPed (Micro-SaaS), destacando composição visual interativa (Landing Page e Tela de Cadastro), 29 testes unitários com Vitest, arquitetura de persistência, diretrizes de privacidade/LGPD e links de acesso.
5. **Conhecimentos (`SkillsSection`)**: Competências organizadas em quatro grupos objetivos (Sustentação e Observabilidade; APIs e Dados; Desenvolvimento; Estudos Atuais), sem barras de progresso ou percentuais arbitrários.
6. **OliverTech (`OliverTechSection`)**: Apresentação do projeto editorial com quatro séries temáticas (*Tech Memory*, *Projects*, *Tech Around the World*, *Career.log*) e um console interativo integrado com emulação VT100 para comandos rápidos.
7. **Contato (`ContactSection`)**: Espaço dedicado para e-mail profissional e links diretos para canais verificados (LinkedIn, GitHub e Instagram).
8. **Rodapé (`Footer`)**: Identidade de encerramento, ano dinâmico automático, status do sistema e atalho para retorno suave ao topo.

---

## Stack Tecnológica

* **React**: Biblioteca para construção de interfaces reativas baseadas em componentes funcionais.
* **TypeScript**: Tipagem estática em toda a base de código, garantindo manutenibilidade e segurança nas estruturas de dados.
* **Vite**: Ferramenta de build e servidor de desenvolvimento rápido com Hot Module Replacement (HMR).
* **Tailwind CSS**: Estilização utilitária com esquema de cores escuro (*dark theme*), tipografia monoespaçada técnica e responsividade fluida de 320 px a monitores ultrawide.
* **Lucide React**: Biblioteca de ícones vetoriais consistentes e acessíveis.

---

## Funcionamento do Seletor de Idioma (PT / EN)

O sistema de internacionalização é centralizado e reativo:

* **Gerenciamento de Estado**: O `LanguageContext` provê o idioma atual (`'pt'` ou `'en'`), métodos para alternância e o objeto de traduções correspondente.
* **Dicionário Tipado**: Todas as strings visíveis e atributos de acessibilidade são definidos em `src/data/content.ts` e fortemente tipados pela interface `PortfolioContent` em `src/types/index.ts`.
* **Persistência Local**: A preferência de idioma é gravada e recuperada do `localStorage` sob a chave `oliver_tech_pref_lang`.
* **Detecção Automática**: Caso não haja preferência salva, o sistema detecta o idioma preferencial do navegador do usuário via `navigator.language`.
* **Metadados Dinâmicos**: A troca de idioma atualiza imediatamente o atributo `lang` do elemento `<html>` (`pt-BR` ou `en-US`), o título do documento (`document.title`) e a metatag `description`, sem necessidade de recarregar a página.

---

## Estrutura do Projeto

```text
site-pro-oliver-tech/
├── public/                     # Imagens estáticas, capturas e favicons
│   ├── docped-home.png
│   ├── docped-login.png
│   ├── docped-logo.png
│   ├── favicon.svg
│   └── oliver-profile.png
├── src/
│   ├── components/
│   │   ├── layout/             # Componentes estruturais (Navbar, Footer, GridBackground)
│   │   ├── sections/           # Seções da página (Hero, About, Experience, FeaturedProject, etc.)
│   │   └── ui/                 # Componentes utilitários de interface (LanguageSwitch, InteractiveConsole, etc.)
│   ├── context/                # Contexto de internacionalização (LanguageContext.tsx)
│   ├── data/                   # Dicionário central de conteúdo PT/EN (content.ts)
│   ├── types/                  # Definições de tipos TypeScript (index.ts)
│   ├── App.tsx                 # Componente raiz da aplicação
│   ├── index.css               # Diretivas do Tailwind CSS e estilos base
│   └── main.tsx                # Ponto de entrada React DOM
├── index.html                  # Arquivo HTML principal
├── package.json                # Configuração de scripts e dependências do projeto
├── tailwind.config.js          # Configuração do Tailwind CSS
├── tsconfig.json               # Configuração do TypeScript
└── vite.config.ts              # Configuração do Vite
```

---

## Requisitos para Execução

* **Node.js**: Versão 18 ou superior instalada no ambiente.
* **Gerenciador de Pacotes**: npm (incluso com o Node.js).

---

## Comandos Disponíveis

Os comandos abaixo são configurados no `package.json`:

### Instalação de Dependências
```bash
npm install
```

### Ambiente de Desenvolvimento
Inicia o servidor de desenvolvimento local com HMR na porta 5173 (ou próxima disponível):
```bash
npm run dev
```

### Build de Produção
Executa a validação de tipos TypeScript (`tsc -b`) e compila os artefatos otimizados para produção na pasta `dist/`:
```bash
npm run build
```

### Pré-visualização do Build
Inicia um servidor local para visualizar a versão compilada em `dist/`:
```bash
npm run preview
```

---

## Links Oficiais

* **LinkedIn**: [linkedin.com/in/oliver-souza-55822920a](https://www.linkedin.com/in/oliver-souza-55822920a/)
* **GitHub**: [github.com/oliverandrewsouza](https://github.com/oliverandrewsouza)
* **Instagram (OliverTech)**: [@oliver.tech_](https://www.instagram.com/oliver.tech_/)
* **DocPed (Aplicação Web)**: [docped-app.vercel.app](https://docped-app.vercel.app/)

---

## Nota de Desenvolvimento

Este portfólio foi concebido e implementado de forma autoral com auxílio de ferramentas de inteligência artificial. A definição de arquitetura, curadoria técnica, redação de conteúdos, testes de responsividade e validações finais de qualidade de software foram conduzidas pelo autor.
