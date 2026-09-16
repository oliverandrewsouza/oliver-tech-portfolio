import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitch = ({ className = '' }: { className?: string }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.langSelectAria}
      className={`relative inline-flex items-center p-0.5 rounded border border-white/15 bg-surface-card text-xs font-mono select-none ${className}`}
    >
      {/* Background sliding indicator */}
      <div
        className={`absolute top-0.5 bottom-0.5 w-[38px] rounded bg-accent/20 border border-accent/50 transition-all duration-300 ease-out ${
          language === 'pt' ? 'left-0.5' : 'left-[41px]'
        }`}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => setLanguage('pt')}
        aria-pressed={language === 'pt'}
        className={`relative z-10 w-[38px] py-1 text-center font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-accent ${
          language === 'pt' ? 'text-white font-bold' : 'text-primary-muted hover:text-white'
        }`}
      >
        PT
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`relative z-10 w-[38px] py-1 text-center font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-accent ${
          language === 'en' ? 'text-white font-bold' : 'text-primary-muted hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};
