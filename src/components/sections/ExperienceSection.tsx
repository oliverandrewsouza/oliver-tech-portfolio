import { useLanguage } from '../../context/LanguageContext';
import { TerminalBadge } from '../ui/TerminalBadge';
import { 
  Building2, 
  Calendar, 
  CheckCircle2, 
  Terminal, 
  MapPin 
} from 'lucide-react';

export const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <TerminalBadge variant="neutral">
              {t.experience.tag}
            </TerminalBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
            {t.experience.title}
          </h2>
          <p className="text-sm sm:text-base text-primary-muted font-mono">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Vertical Modular Timeline */}
        <div className="relative border-l-2 border-white/10 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {t.experience.items.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline node marker */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 ${
                index === 0 
                  ? 'border-accent group-hover:bg-accent' 
                  : 'border-white/40 group-hover:border-accent'
              } transition-colors flex items-center justify-center`}>
                <span className={`w-1.5 h-1.5 rounded-full ${
                  index === 0 
                    ? 'bg-accent group-hover:bg-white' 
                    : 'bg-white/60 group-hover:bg-accent'
                }`} />
              </div>

              <div className="p-6 sm:p-8 rounded-lg bg-surface border border-white/10 hover:border-accent/40 transition-all duration-300">
                
                {/* Card Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-accent/10 text-accent border border-accent/20">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {item.role}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-base font-semibold text-white/90 font-mono">
                      <Building2 className="w-4 h-4 text-accent" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-primary-muted">
                    <div className="flex items-center gap-1.5 text-accent font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-1.5 text-white/50">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Main Description */}
                <div className="py-5">
                  <p className="text-sm sm:text-base text-primary/95 leading-relaxed font-normal mb-5">
                    {item.description}
                  </p>

                  {item.responsibilities && item.responsibilities.length > 0 && (
                    <div className="mb-6">
                      <div className="text-xs font-mono text-white/70 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-accent" />
                        <span>{item.activitiesTitle || t.experience.activitiesLabel || '// ATIVIDADES & DESTAQUES'}</span>
                      </div>

                      <ul className="space-y-2.5 text-xs sm:text-sm text-primary-muted">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack / Competencies */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-[11px] font-mono text-white/50 mb-2.5 uppercase tracking-wider">
                      {item.techStackTitle || t.experience.toolsLabel || '// CONTEXTO TÉCNICO & FERRAMENTAS:'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-surface-card border border-white/10 text-xs font-mono text-white/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
