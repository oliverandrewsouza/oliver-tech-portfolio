import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CornerDownLeft } from 'lucide-react';

interface ConsoleLine {
  type: 'input' | 'output' | 'system';
  text: string;
}

export const InteractiveConsole = () => {
  const { language, t } = useLanguage();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<ConsoleLine[]>(() => [
    {
      type: 'system',
      text: language === 'pt' 
        ? 'CONSIGNA OLIVER_TECH LABS // CONSOLE INTERATIVO INICIALIZADO.' 
        : 'OLIVER_TECH LABS TERMINAL // INTERACTIVE CONSOLE INITIALIZED.',
    },
    {
      type: 'system',
      text: language === 'pt' 
        ? "Digite 'ajuda' ou 'help' para listar os comandos de telemetria." 
        : "Type 'help' to list available telemetry commands.",
    },
  ]);

  const terminalOutputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory([
      {
        type: 'system',
        text: language === 'pt' 
          ? 'CONSIGNA OLIVER_TECH LABS // CONSOLE INTERATIVO INICIALIZADO.' 
          : 'OLIVER_TECH LABS TERMINAL // INTERACTIVE CONSOLE INITIALIZED.',
      },
      {
        type: 'system',
        text: language === 'pt' 
          ? "Digite 'ajuda' ou 'help' para listar os comandos de telemetria." 
          : "Type 'help' to list available telemetry commands.",
      },
    ]);
  }, [language]);

  const handleCommand = (e: FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: ConsoleLine[] = [...history, { type: 'input', text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
      case 'ajuda':
        newHistory.push({
          type: 'output',
          text: language === 'pt'
            ? `COMANDOS DISPONÍVEIS:
- sobre: Trajetória e perfil profissional de Oliver Souza
- itau: Experiência em sustentação de sistemas e APIs
- banrisul: Experiência em atendimento e operações bancárias
- docped: Micro-SaaS para Educação Inclusiva e Neurodesenvolvimento
- conhecimentos / skills: Grupos de competências técnicas reais
- olivertech: Projeto editorial de história da tecnologia
- contato: Canais de comunicação oficiais
- status: Localização e disponibilidade
- limpar / clear: Limpar tela do terminal`
            : `AVAILABLE COMMANDS:
- about: Professional background and education
- itau: Application support & API validation experience
- banrisul: Customer service & banking operations
- docped: Micro-SaaS for Inclusive Education & Neurodevelopment
- skills: Real technical competency groups
- olivertech: Tech history editorial project
- contact: Official communication channels
- status: Location & availability
- clear / cls: Clear terminal display`,
        });
        break;

      case 'about':
      case 'sobre':
        newHistory.push({
          type: 'output',
          text: language === 'pt'
            ? `OLIVER SOUZA // Engenheiro de Computação com formação interdisciplinar (Engenharia de Software, Neurociência, Educação e Filosofia). Experiência prática em sustentação de aplicações, observabilidade, validação de APIs e desenvolvimento de produtos digitais.`
            : `OLIVER SOUZA // Computer Engineer with an interdisciplinary background (Software Engineering, Neuroscience, Education, and Philosophy). Hands-on experience in application support, observability, API validation, and digital product development.`,
        });
        break;

      case 'itau':
        newHistory.push({
          type: 'output',
          text: language === 'pt'
            ? `ITAÚ UNIBANCO // Analista Jr. de Engenharia de TI (Out 2021 – Fev 2024)
- Sustentação de aplicações e apoio à operação em ambiente com microsserviços Java
- Validação de endpoints e contratos de APIs REST via Postman
- Análise investigativa de logs no Splunk para apoio a incidentes
- Colaboração com squads de desenvolvimento, produto e qualidade
- Ferramentas: AWS, Git, Jira, Confluence, SQL, JSON`
            : `ITAÚ UNIBANCO // Jr. IT Engineering Analyst (Oct 2021 – Feb 2024)
- Application support in a distributed Java microservices environment
- REST API endpoint and contract validation using Postman
- Investigative log analysis in Splunk for incident triage
- Collaboration with dev, product, and QA squads
- Tooling: AWS, Git, Jira, Confluence, SQL, JSON`,
        });
        break;

      case 'banrisul':
        newHistory.push({
          type: 'output',
          text: language === 'pt'
            ? `BANRISUL // Atendimento e Operações Bancárias (Experiência presencial em agência)
- Atendimento presencial e orientação sobre aplicativos e serviços digitais
- Triagem de demandas e conferência rigorosa de documentos
- Apoio às rotinas operacionais e procedimentos de segurança bancária`
            : `BANRISUL // Customer Service & Banking Operations (On-site branch experience)
- In-person customer assistance and digital banking apps guidance
- Demand triage and thorough document verification
- Support for operational routines and branch security compliance`,
        });
        break;

      case 'docped':
        newHistory.push({
          type: 'output',
          text: language === 'pt'
            ? `DOCPED // Micro-SaaS de documentação pedagógica e clínica
- Estruturação assistida de pareceres, PEIs e relatórios para Educação Inclusiva
- Stack: React 18, TypeScript, Vite, Tailwind CSS, Supabase, PostgreSQL, Gemini API
- Qualidade: 29 testes unitários desenvolvidos com Vitest
- Diretrizes: Privacidade, consideração de requisitos da LGPD; IA atua como apoio estrutural, sem substituir a validação profissional
- Acesso: https://docped-app.vercel.app/`
            : `DOCPED // Micro-SaaS for pedagogical and clinical documentation
- Assisted structuring of evaluations, IEPs (PEIs), and clinical reports
- Stack: React 18, TypeScript, Vite, Tailwind CSS, Supabase, PostgreSQL, Gemini API
- Quality: 29 unit tests authored with Vitest
- Directives: Privacy-focused, engineered considering LGPD; AI acts as structural assistance, not replacing professional evaluation
- Live: https://docped-app.vercel.app/`,
        });
        break;

      case 'skills':
      case 'conhecimentos':
      case 'stack':
        newHistory.push({
          type: 'output',
          text: language === 'pt'
            ? `CONHECIMENTOS TÉCNICOS (SEM PERCENTUAIS ARBITRÁRIOS):
1. Sustentação e observabilidade: Splunk, Análise de logs, Incidentes, Jira, Confluence
2. APIs e dados: Postman, APIs REST, JSON, SQL, PostgreSQL
3. Desenvolvimento: React, TypeScript, Vite, Tailwind CSS, Git, Supabase
4. Estudando atualmente: QA, Automação de testes, Python, Inglês profissional`
            : `TECHNICAL SKILLS (NO ARBITRARY PERCENTAGES):
1. Support & Observability: Splunk, Log Analysis, Incidents, Jira, Confluence
2. APIs & Data: Postman, REST APIs, JSON, SQL, PostgreSQL
3. Development: React, TypeScript, Vite, Tailwind CSS, Git, Supabase
4. Currently Studying: QA, Test Automation, Python, Professional English`,
        });
        break;

      case 'olivertech':
        newHistory.push({
          type: 'output',
          text: language === 'pt'
            ? `OLIVERTECH // Projeto editorial sobre História da tecnologia, produtos digitais e vivências pelo mundo.
- Séries: Memória Tech, Projetos, Tech pelo Mundo, Carreira.log
- Acompanhe no Instagram: https://www.instagram.com/oliver.tech_/`
            : `OLIVERTECH // Editorial project covering tech history, digital products, and experiences around the world.
- Series: Tech Memory, Projects, Tech Around the World, Career.log
- Follow on Instagram: https://www.instagram.com/oliver.tech_/`,
        });
        break;

      case 'status':
        newHistory.push({
          type: 'output',
          text: language === 'pt'
            ? `STATUS DO SISTEMA:
- Localização: Caxias do Sul, RS, Brasil
- Fuso: GMT-3 (Horário de Brasília)
- Disponibilidade: Aberto para oportunidades remotas e internacionais`
            : `SYSTEM STATUS:
- Location: Caxias do Sul, RS, Brazil
- Timezone: GMT-3 (Brasília Time)
- Availability: Open for remote and international opportunities`,
        });
        break;

      case 'contact':
      case 'contato':
        newHistory.push({
          type: 'output',
          text: language === 'pt'
            ? `CANAIS OFICIAIS DE CONTATO:
- LinkedIn: https://www.linkedin.com/in/oliver-souza-55822920a/
- GitHub: https://github.com/oliverandrewsouza
- Instagram: https://www.instagram.com/oliver.tech_/
- E-mail: [A definir / Inserir posteriormente]`
            : `OFFICIAL CONTACT CHANNELS:
- LinkedIn: https://www.linkedin.com/in/oliver-souza-55822920a/
- GitHub: https://github.com/oliverandrewsouza
- Instagram: https://www.instagram.com/oliver.tech_/
- E-mail: [To be inserted later]`,
        });
        break;

      case 'clear':
      case 'limpar':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: language === 'pt'
            ? `Comando não reconhecido: '${cmd}'. Digite 'ajuda' para instruções.`
            : `Command not recognized: '${cmd}'. Type 'help' for instructions.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
    requestAnimationFrame(() => {
      if (terminalOutputRef.current) {
        terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
      }
    });
  };

  return (
    <div className="rounded-lg bg-surface border border-white/15 overflow-hidden font-mono shadow-lg">
      
      {/* Console Title Bar */}
      <div className="bg-surface-card px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
          </div>
          <span className="text-xs text-white/70 ml-2 font-bold">
            oliver@tech-terminal: ~
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-white/40">
          <span>VT100_EMU</span>
          <span>[UTF-8]</span>
        </div>
      </div>

      {/* Output Screen */}
      <div ref={terminalOutputRef} className="p-4 sm:p-5 h-64 overflow-y-auto space-y-3 text-xs leading-relaxed">
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">
            {line.type === 'input' && (
              <span className="text-accent font-semibold">{line.text}</span>
            )}
            {line.type === 'output' && (
              <span className="text-primary-muted">{line.text}</span>
            )}
            {line.type === 'system' && (
              <span className="text-white/40 italic">{line.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Input Prompt Form */}
      <form onSubmit={handleCommand} className="border-t border-white/10 p-3 bg-surface-card/60 flex items-center gap-2">
        <span className="text-accent font-bold pl-2">&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder={t.oliverTech.terminalPlaceholder}
          aria-label={language === 'pt' ? "Comando de terminal interativo" : "Interactive terminal command"}
          className="flex-1 bg-transparent text-xs text-white focus:outline-none placeholder:text-white/20 font-mono"
        />
        <button
          type="submit"
          aria-label={language === 'pt' ? "Executar comando" : "Execute command"}
          className="px-3 py-1 rounded bg-surface hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-xs flex items-center gap-1 transition-colors"
        >
          <CornerDownLeft className="w-3 h-3" />
        </button>
      </form>

    </div>
  );
};
