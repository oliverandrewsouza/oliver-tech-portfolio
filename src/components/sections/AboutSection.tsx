import { useLanguage } from '../../context/LanguageContext';
import { TerminalBadge } from '../ui/TerminalBadge';
import { 
  Activity, 
  Workflow, 
  Code2, 
  CheckCircle2, 
  MapPin, 
  Globe2,
  Building2,
  GraduationCap
} from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Activity className="w-5 h-5 text-accent" />;
      case 1:
        return <Workflow className="w-5 h-5 text-accent" />;
      case 2:
        return <Code2 className="w-5 h-5 text-accent" />;
      case 3:
      default:
        return <GraduationCap className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="sobre" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <TerminalBadge variant="neutral">
              {t.about.tag}
            </TerminalBadge>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.about.title}
          </h2>

          <p className="text-base sm:text-lg text-accent font-mono font-medium max-w-3xl mb-4">
            {t.about.heading}
          </p>

          {/* Small visual line for Location and Availability */}
          <div className="inline-flex flex-wrap items-center gap-3 p-2.5 rounded bg-surface-card border border-white/10 text-xs font-mono text-white/90">
            <div className="flex items-center gap-1.5 text-accent">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-white font-medium">{t.about.locationLine}</span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <Globe2 className="w-3.5 h-3.5" />
              <span>{t.about.availabilityLine}</span>
            </div>
          </div>
        </div>

        {/* Narrative Block matching exact user prompt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base leading-relaxed">
            <div className="p-4 rounded bg-surface border border-white/10 text-white font-medium">
              {t.about.p1}
            </div>

            <p className="text-primary-muted leading-relaxed">
              {t.about.p2}
            </p>

            <p className="text-primary-muted leading-relaxed">
              {t.about.p3}
            </p>
          </div>

          <div className="lg:col-span-4 p-5 rounded bg-surface border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-white/80 pb-3 border-b border-white/10">
              <Building2 className="w-4 h-4 text-accent" />
              <span>{t.about.sidebarTitle || 'EXPERIÊNCIAS ANTERIORES'}</span>
            </div>
            
            <ul className="space-y-3 text-xs font-mono text-primary-muted">
              {t.about.sidebarItems?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{item.bold}</strong> {item.text}
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-white/10 text-[11px] font-mono text-white/50 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-accent" />
              <span>{t.about.sidebarFooter || 'Engenharia de Computação & Formação Interdisciplinar'}</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid (Honest, accurate wording) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.about.pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-6 rounded bg-surface border border-white/10 hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-accent font-semibold tracking-wider">
                    {pillar.code}
                  </span>
                  <div className="p-2 rounded bg-surface-card border border-white/10 group-hover:border-accent/30 transition-colors">
                    {getPillarIcon(idx)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-primary-muted leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {pillar.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-card border border-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
