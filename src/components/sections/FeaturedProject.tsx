import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TerminalBadge } from '../ui/TerminalBadge';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Cpu,
  FileCheck2,
  Maximize2,
  X,
  Sparkles,
  Info
} from 'lucide-react';

export const FeaturedProject = () => {
  const { t } = useLanguage();
  const { project, sectionTag, exclusiveNotice } = t.featuredProject;
  
  // Controls which screenshot is elevated on front: 'home' or 'login'
  const [elevatedScreen, setElevatedScreen] = useState<'home' | 'login'>('home');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="projetos" className="py-20 md:py-28 border-b border-white/10 relative overflow-hidden">
      
      {/* Background ambient glow in DocPed exclusive emerald/turquoise */}
      <div 
        className="absolute top-1/4 right-0 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <TerminalBadge variant="docped">
              {sectionTag}
            </TerminalBadge>
            <span className="text-[11px] font-mono text-docped-light/90 bg-docped/10 px-2.5 py-0.5 rounded border border-docped/25">
              {exclusiveNotice}
            </span>
          </div>

          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <span className="text-sm sm:text-base font-mono text-docped-light font-medium">
              // {project.identification}
            </span>
          </div>

          <p className="text-sm sm:text-base text-primary-muted font-mono max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* VISUAL COMPOSITION: Main Home in foreground, Registration Screen partially overlaid */}
        <div className="mb-14">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-docped animate-pulse" />
              <span className="text-white font-bold">{t.featuredProject.uiLabels?.compositionTitle || 'COMPOSIÇÃO VISUAL // PÁGINA INICIAL & TELA DE CADASTRO'}</span>
            </div>
            <span className="text-docped-light hidden sm:inline">
              {t.featuredProject.uiLabels?.compositionSubtitle || '[CLIQUE PARA ALTERNAR O PRIMEIRO PLANO OU AMPLIAR]'}
            </span>
          </div>

          {/* Mobile Screen Selector Tabs */}
          <div className="flex sm:hidden items-center gap-2 mb-3">
            <button
              type="button"
              onClick={() => setElevatedScreen('home')}
              className={`flex-1 min-h-[40px] py-1.5 px-3 rounded text-xs font-mono font-semibold transition-all border ${
                elevatedScreen === 'home'
                  ? 'bg-docped text-black border-docped shadow-docped-subtle'
                  : 'bg-surface-card border-white/10 text-white/70 hover:text-white'
              }`}
            >
              1. {t.featuredProject.uiLabels?.homeTab || 'Página Inicial'}
            </button>
            <button
              type="button"
              onClick={() => setElevatedScreen('login')}
              className={`flex-1 min-h-[40px] py-1.5 px-3 rounded text-xs font-mono font-semibold transition-all border ${
                elevatedScreen === 'login'
                  ? 'bg-docped text-black border-docped shadow-docped-subtle'
                  : 'bg-surface-card border-white/10 text-white/70 hover:text-white'
              }`}
            >
              2. {t.featuredProject.uiLabels?.loginTab || 'Tela de Cadastro'}
            </button>
          </div>

          {/* Overlapping Showcase Stage */}
          <div className="relative min-h-[400px] sm:min-h-[560px] md:min-h-[640px] w-full rounded-2xl bg-[#06090D] border-2 border-docped/30 p-3 sm:p-6 shadow-2xl overflow-hidden">
            
            {/* Primary Frame (Home Screenshot) */}
            <div 
              onClick={() => setElevatedScreen('home')}
              className={`transition-all duration-500 rounded-xl overflow-hidden border ${
                elevatedScreen === 'home'
                  ? 'relative z-20 border-docped/60 shadow-2xl shadow-docped/10 sm:max-w-[85%]'
                  : 'relative z-10 border-white/20 opacity-80 hover:opacity-100 sm:max-w-[80%]'
              }`}
            >
              {/* Window Header */}
              <div className="bg-surface-card px-4 py-2 border-b border-docped/30 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-docped" />
                  <span className="text-white font-semibold ml-2">{t.featuredProject.uiLabels?.homeTab || 'DocPed — Página Inicial'}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setLightboxImg(project.homeImg); }}
                  className="flex items-center gap-1 text-docped-light hover:text-white transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.featuredProject.uiLabels?.enlarge || 'Ampliar'}</span>
                </button>
              </div>

              {/* Home Image (Full ratio, no distortion) */}
              <img
                src={project.homeImg}
                alt={t.featuredProject.uiLabels?.homeAlt || 'DocPed Página Inicial em Destaque'}
                className="w-full h-auto object-contain bg-black/40 cursor-pointer"
              />
            </div>

            {/* Secondary Overlaid Frame (Registration / Login Screen) */}
            <div 
              onClick={() => setElevatedScreen('login')}
              className={`transition-all duration-500 rounded-xl overflow-hidden border ${
                elevatedScreen === 'login'
                  ? 'absolute z-30 right-2 sm:right-6 top-16 sm:top-24 w-[92%] sm:w-[65%] md:w-[58%] border-docped shadow-2xl shadow-black/80 ring-2 ring-docped/40'
                  : 'absolute z-20 right-2 sm:right-6 top-20 sm:top-28 w-[88%] sm:w-[60%] md:w-[52%] border-white/30 shadow-2xl shadow-black/80 hover:border-docped/60'
              }`}
            >
              {/* Window Header */}
              <div className="bg-surface-card/95 backdrop-blur-md px-4 py-2 border-b border-docped/30 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-docped" />
                  <span className="text-white font-semibold ml-2">{t.featuredProject.uiLabels?.loginTab || 'DocPed — Tela de Cadastro / Acesso'}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setLightboxImg(project.loginImg); }}
                  className="flex items-center gap-1 text-docped-light hover:text-white transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.featuredProject.uiLabels?.enlarge || 'Ampliar'}</span>
                </button>
              </div>

              {/* Login Image (Full ratio, partially overlapping the home screen) */}
              <img
                src={project.loginImg}
                alt={t.featuredProject.uiLabels?.loginAlt || 'DocPed Tela de Cadastro Parcialmente Sobreposta'}
                className="w-full h-auto object-contain bg-black/60 cursor-pointer"
              />
            </div>

          </div>
        </div>

        {/* Lightbox Fullscreen Modal */}
        {lightboxImg && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in"
            onClick={() => setLightboxImg(null)}
          >
            <div className="max-w-6xl w-full bg-surface border border-docped/50 rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="px-4 py-2.5 bg-surface-card border-b border-docped/30 flex items-center justify-between font-mono text-xs">
                <span className="text-docped-light font-bold">
                  {t.featuredProject.uiLabels?.lightboxTitle || 'DOCPED // VISUALIZAÇÃO EM ALTA RESOLUÇÃO'}
                </span>
                <button 
                  onClick={() => setLightboxImg(null)}
                  className="p-1 rounded hover:bg-white/10 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="max-h-[82vh] overflow-auto p-2 bg-[#060A0E]">
                <img
                  src={lightboxImg}
                  alt={t.featuredProject.uiLabels?.lightboxAlt || 'DocPed Visualização em Alta Resolução'}
                  className="w-full h-auto rounded object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Details, Problem, Solution, Features, Quality & Tech Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Problem, Solution, Features & Responsible Disclaimer */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Problem & Solution Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg bg-surface border border-white/10 space-y-2">
                <div className="text-xs font-mono font-bold text-accent flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>{t.featuredProject.uiLabels?.problemTitle || 'O PROBLEMA'}</span>
                </div>
                <p className="text-xs sm:text-sm text-primary-muted leading-relaxed font-normal">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-lg bg-docped/5 border border-docped/30 space-y-2">
                <div className="text-xs font-mono font-bold text-docped-light flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-docped" />
                  <span>{t.featuredProject.uiLabels?.solutionTitle || 'A SOLUÇÃO DOCPED'}</span>
                </div>
                <p className="text-xs sm:text-sm text-primary/95 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Funcionalidades Principais */}
            <div className="p-6 rounded-lg bg-surface border border-white/10">
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-docped" />
                <span>{t.featuredProject.uiLabels?.featuresTitle || 'Funcionalidades da Plataforma'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-primary-muted">
                {project.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 p-2 rounded bg-surface-card border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-docped shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsabilidade & Observação Ética/LGPD */}
            <div className="p-5 rounded-lg bg-surface-card border border-docped/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-docped-light font-bold">
                <ShieldCheck className="w-4 h-4 text-docped shrink-0" />
                <span>{t.featuredProject.uiLabels?.privacyTitle || 'DIRETRIZES DE PRIVACIDADE & RESPONSABILIDADE'}</span>
              </div>
              <p className="text-xs text-primary-muted leading-relaxed">
                {project.responsibleNotice}
              </p>
            </div>

            {/* Observação discreta sobre desenvolvimento autoral e IA */}
            <div className="p-4 rounded-lg bg-surface border border-white/5 flex items-start gap-2.5 text-[11px] font-mono text-white/50">
              <Info className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {project.discreetNote}
              </p>
            </div>

          </div>

          {/* Right Column: Technologies, Quality / Vitest & Action CTAs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Action Buttons */}
            <div className="p-6 rounded-lg bg-surface border border-docped/40 space-y-3">
              <a
                href={project.ctaVisitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded bg-docped hover:bg-docped-light text-black font-mono text-xs sm:text-sm font-bold tracking-wider uppercase border border-docped/80 shadow-docped-subtle transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>{project.ctaVisit}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#docped-tech"
                className="w-full py-2.5 px-4 rounded bg-surface-card hover:bg-surface-hover text-docped-light font-mono text-xs font-semibold tracking-wider text-center border border-docped/30 transition-colors block"
              >
                {project.ctaTech} ↓
              </a>
            </div>

            {/* Qualidade e Testes Vitest */}
            <div className="p-6 rounded-lg bg-surface border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-docped-light font-bold">
                <Sparkles className="w-4 h-4 text-docped" />
                <span>{t.featuredProject.uiLabels?.qaTitle || 'GARANTIA DE QUALIDADE (QA)'}</span>
              </div>
              <div className="p-3.5 rounded bg-surface-card border border-docped/20">
                <div className="font-mono text-2xl font-bold text-docped-light mb-1">
                  {t.featuredProject.uiLabels?.qaPill || '29 Testes Unitários'}
                </div>
                <p className="text-xs text-primary-muted leading-relaxed font-mono">
                  {project.quality}
                </p>
              </div>
            </div>

            {/* Tecnologias Utilizadas (id="docped-tech") */}
            <div id="docped-tech" className="p-6 rounded-lg bg-surface border border-white/10 scroll-mt-24">
              <div className="flex items-center gap-2 text-xs font-mono text-white/80 font-bold mb-3">
                <Cpu className="w-4 h-4 text-accent" />
                <span>{t.featuredProject.uiLabels?.techTitle || 'TECNOLOGIAS & ARQUITETURA'}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded bg-surface-card border border-docped/25 text-xs font-mono text-docped-light font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
