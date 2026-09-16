import { useLanguage } from '../../context/LanguageContext';
import { ArrowUp, Terminal } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-background text-primary-muted font-mono relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Footer Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10 text-center md:text-left">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white text-lg font-bold">
              <Terminal className="w-5 h-5 text-accent" />
              <span>{t.footer.author}</span>
            </div>
            <p className="text-sm text-primary-muted font-sans font-normal">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-white/50">
              © {currentYear} {t.footer.author}
            </span>
            <button
              onClick={scrollToTop}
              aria-label={t.footer.backToTop}
              className="flex items-center gap-1.5 text-xs text-white bg-surface-card hover:text-accent hover:border-accent/40 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none rounded px-3 py-2 border border-white/15 cursor-pointer"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
            </button>
          </div>
        </div>

        {/* Bottom build and tech notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 text-center sm:text-left">
          <span>{t.footer.systemStatus}</span>
          <span>{t.footer.builtWith}</span>
        </div>

      </div>
    </footer>
  );
};
