import { useLanguage } from '../../context/LanguageContext';
import { TerminalBadge } from '../ui/TerminalBadge';
import { 
  Activity, 
  Database, 
  Layout, 
  GraduationCap
} from 'lucide-react';

export const SkillsSection = () => {
  const { t } = useLanguage();

  const getGroupIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Activity className="w-4 h-4 text-accent" />;
      case 1:
        return <Database className="w-4 h-4 text-accent" />;
      case 2:
        return <Layout className="w-4 h-4 text-accent" />;
      case 3:
      default:
        return <GraduationCap className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section id="conhecimentos" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <TerminalBadge variant="neutral">
              {t.skills.tag}
            </TerminalBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
            {t.skills.title}
          </h2>
          <p className="text-sm sm:text-base text-primary-muted font-mono mb-3">
            {t.skills.subtitle}
          </p>
          <div className="inline-block text-[11px] font-mono text-accent/90 bg-accent/10 px-3 py-1 rounded border border-accent/20">
            {t.skills.noteNoPercentages}
          </div>
        </div>

        {/* 4 Exact Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.categories.map((category, catIdx) => (
            <div
              key={category.id}
              className="p-6 rounded-lg bg-surface border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="text-[10px] font-mono font-bold text-accent tracking-wider">
                    {category.code}
                  </span>
                  <div className="p-2 rounded bg-surface-card border border-white/10 text-accent">
                    {getGroupIcon(catIdx)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-4 group-hover:text-accent transition-colors font-mono">
                  {category.title}
                </h3>

                {/* Skill Pills */}
                <div className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-2 rounded bg-surface-card border border-white/5 hover:border-white/20 text-xs font-mono text-white/90 flex items-center gap-2 transition-colors"
                    >
                      <span className="text-accent">&gt;</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {category.id !== 'estudos-atuais' && (
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-white/30">
                  <span>{t.skills.verifiedLabel || 'VERIFICADO'}</span>
                  <span>[✓]</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
