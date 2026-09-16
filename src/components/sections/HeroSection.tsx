import { useLanguage } from '../../context/LanguageContext';
import { TerminalBadge } from '../ui/TerminalBadge';
import { BlinkingCursor } from '../ui/BlinkingCursor';
import { 
  ArrowDownRight, 
  Terminal, 
  Compass 
} from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="inicio" 
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 border-b border-white/10 overflow-hidden"
    >
      {/* Subtle ambient depth backlight aura specific to the portrait frame */}
      <div
        className="absolute top-1/4 right-[5%] w-[420px] h-[420px] max-w-[90vw] max-h-[90vw] pointer-events-none z-0 select-none opacity-50"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(37, 99, 235, 0.03) 45%, transparent 70%)',
        }}
      />

      {/* Decorative technical coordinate accents */}
      <div className="absolute top-24 right-4 sm:right-10 font-mono text-[10px] text-white/20 select-none pointer-events-none hidden md:block z-10">
        [SYS_NODE: RS_BR // 29°10'S 51°10'W]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text, Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Technical Header Label */}
            <div className="flex flex-wrap items-center gap-3">
              <TerminalBadge variant="coral">
                {t.hero.label}
              </TerminalBadge>

              <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-white/40 bg-surface px-2.5 py-0.5 rounded border border-white/10">
                <span className="text-accent">&gt;</span>
                <span>{t.hero.terminalCommand}</span>
              </div>
            </div>

            {/* Title with blinking cursor */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {t.hero.title}
              <BlinkingCursor />
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-primary-muted font-normal leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded font-mono text-xs sm:text-sm font-semibold tracking-wider text-white bg-accent hover:bg-accent-hover border border-accent/70 shadow-accent-subtle transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded font-mono text-xs sm:text-sm font-medium tracking-wider text-primary bg-surface-card hover:bg-surface-hover border border-white/15 hover:border-white/30 transition-all duration-200"
              >
                <Terminal className="w-4 h-4 text-accent" />
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Honest Technical Indicators Grid (No fake numbers) */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[10px] font-mono text-white/40 mb-2.5 tracking-wider uppercase">
                {t.hero.indicatorsHeading || '// ÁREAS DE ATUAÇÃO E FORMAÇÃO'}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {t.hero.indicators.map((indicator, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded bg-surface border border-white/10 hover:border-accent/40 transition-colors flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-mono text-accent">
                        0{idx + 1}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/80" />
                    </div>
                    <div className="text-[11px] font-mono font-bold text-white tracking-wide uppercase leading-snug">
                      {indicator}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Asymmetric Technological Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer corner technical markers */}
              <div className="absolute -top-3 -left-3 text-accent font-mono text-xs select-none">
                ┌
              </div>
              <div className="absolute -top-3 -right-3 text-accent font-mono text-xs select-none">
                ┐
              </div>
              <div className="absolute -bottom-3 -left-3 text-accent font-mono text-xs select-none">
                └
              </div>
              <div className="absolute -bottom-3 -right-3 text-accent font-mono text-xs select-none">
                ┘
              </div>

              {/* Technological HUD Frame Container */}
              <div className="relative rounded-lg bg-surface border border-white/20 p-2 shadow-2xl overflow-hidden group">
                
                {/* Frame Top Header */}
                <div className="px-3 py-1.5 mb-2 bg-surface-card rounded border border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white font-bold">PORTRAIT_FEED // 01</span>
                  </div>
                  <span className="text-accent">STATUS: READY</span>
                </div>

                {/* Profile Image with subtle angled/notched frame, preserved natural face without heavy filters */}
                <div className="relative rounded border border-white/15 overflow-hidden bg-[#0A0D14]">
                  <img
                    src="/oliver-profile.png"
                    alt={t.hero.photoAlt}
                    className="w-full h-80 sm:h-96 object-cover object-top filter contrast-[1.02] brightness-[0.98] transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Scanline overlay (very subtle) */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 0, 0, 0.4) 3px, rgba(0, 0, 0, 0.4) 4px)',
                    }}
                  />

                  {/* Internal frame HUD data overlay */}
                  <div className="absolute bottom-2 left-2 right-2 bg-background/85 backdrop-blur-sm border border-white/10 rounded px-2.5 py-1.5 flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center gap-1.5 text-white/90">
                      <Compass className="w-3 h-3 text-accent" />
                      <span>OLIVER SOUZA // ENG. COMP</span>
                    </div>
                    <span className="text-white/40">ID: 042-SOUZA</span>
                  </div>
                </div>

                {/* Frame Bottom Coordinates */}
                <div className="mt-2 px-3 py-1 flex items-center justify-between text-[9px] font-mono text-white/40">
                  <span>LAT: -29.1678 // LON: -51.1794</span>
                  <span>CAXIAS DO SUL // RS</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
