import { useLanguage } from '../../context/LanguageContext';
import { TerminalBadge } from '../ui/TerminalBadge';
import { InteractiveConsole } from '../ui/InteractiveConsole';
import { 
  BookOpen, 
  ExternalLink, 
  Terminal, 
  Layers,
  Globe2,
  Cpu,
  Bookmark
} from 'lucide-react';

export const OliverTechSection = () => {
  const { t } = useLanguage();

  const getSeriesIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-4 h-4 text-accent" />;
      case 1:
        return <Layers className="w-4 h-4 text-accent" />;
      case 2:
        return <Globe2 className="w-4 h-4 text-accent" />;
      case 3:
      default:
        return <Bookmark className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section id="olivertech" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <TerminalBadge variant="neutral">
              {t.oliverTech.tag}
            </TerminalBadge>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 font-mono">
            {t.oliverTech.title}
          </h2>
          
          <p className="text-sm sm:text-base text-accent font-mono mb-4">
            {t.oliverTech.subtitle}
          </p>

          <p className="text-sm sm:text-base text-primary-muted max-w-3xl leading-relaxed">
            {t.oliverTech.text}
          </p>

          {/* Instagram Button */}
          <div className="pt-4">
            <a
              href={t.oliverTech.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded bg-surface-card hover:bg-surface-hover text-white font-mono text-xs font-semibold tracking-wider border border-white/20 hover:border-accent/60 transition-all shadow-sm group"
            >
              <svg className="w-4 h-4 text-accent fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>{t.oliverTech.instagramCta}</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* 2-Column Grid: 4 Editorial Series & Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 4 Editorial Series */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-white/60 pb-2 border-b border-white/10">
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>{t.oliverTech.seriesTitle || 'SÉRIES EDITORIAIS DO PROJETO'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.oliverTech.series.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-5 rounded-lg bg-surface border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-accent font-semibold tracking-wider">
                        {item.code}
                      </span>
                      <div className="p-1.5 rounded bg-surface-card border border-white/10">
                        {getSeriesIcon(idx)}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors mb-2 font-mono">
                      {item.title}
                    </h3>

                    <p className="text-xs text-primary-muted leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                    <span>{t.oliverTech.statusInProgress || 'STATUS: EM_PRODUÇÃO'}</span>
                    <span>LOG // 0{idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Console */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-white/60 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>{t.oliverTech.terminalTitle || 'TERMINAL DE COMANDOS'}</span>
              </div>
              <span className="text-[10px] text-accent">OLIVERTECH // CLI</span>
            </div>

            <InteractiveConsole />
          </div>

        </div>

      </div>
    </section>
  );
};
