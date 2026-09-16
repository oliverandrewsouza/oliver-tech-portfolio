# Changelog

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado no padrão [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

---

## [Unreleased]

### Fixed
* **Deslocamento indevido de rolagem na troca de idiomas**: Eliminação de scroll jump global que deslocava a visualização da página para a região do terminal e da seção de contato em desktop e mobile ao alternar entre PT e EN, desacoplando a sincronização do console interativo do ciclo de rolagem global do navegador.
* **Conteúdo parcialmente traduzido na versão inglesa**: Correção de títulos de seções (`ABOUT_ME`), séries editoriais do OliverTech (`TECH MEMORY`, `PROJECTS`, `TECH AROUND THE WORLD`, `CAREER.LOG`), badges, períodos de atuação e rótulos da composição visual do DocPed.
* **Strings hardcoded**: Remoção de textos literais fixos em componentes JSX (`ExperienceSection.tsx`, `ContactSection.tsx`, `FeaturedProject.tsx`), substituindo-os por propriedades correspondentes nos dicionários de tradução.
* **Textos de acessibilidade**: Internacionalização dinâmica de atributos `aria-label` (barra de navegação, botão de abertura/fechamento do menu mobile e console interativo) e textos alternativos (`alt`) de todas as imagens da aplicação.
* **Metadados inconsistentes do DocPed**: Eliminação definitiva de descrições inadequadas que apresentavam o projeto como voltado à saúde pediátrica, estabelecendo-o com precisão como Micro-SaaS para documentação pedagógica e clínica na Educação Inclusiva e no Neurodesenvolvimento.

### Changed
* **Centralização dos textos traduzíveis**: Consolidação completa de todas as cadeias de texto com variação de idioma no repositório central `src/data/content.ts`, com expansão pontual e segura do modelo de tipos em `src/types/index.ts`.
* **Alinhamento dos dados do DocPed entre experiência e projeto em destaque**: Harmonização da stack tecnológica do DocPed no card da linha do tempo com o projeto real e confirmado (`React 18`, `TypeScript`, `Vite`, `Tailwind CSS`, `Supabase`, `PostgreSQL`, `Google Gemini API`, `Vitest`), expurgando referências legadas a Next.js 15, Prisma ORM, Stripe API e Zod.
