import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitch } from '../ui/LanguageSwitch';
import { Menu, X, Terminal, MessageSquareCode } from 'lucide-react';

export const Navbar = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['inicio', 'sobre', 'experiencia', 'projetos', 'conhecimentos', 'olivertech', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-background/60 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Typographic brand: OLIVER_TECH */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-1 focus:ring-accent rounded p-1"
          >
            <div className="w-8 h-8 rounded border border-accent/40 bg-surface-card flex items-center justify-center text-accent group-hover:border-accent transition-colors">
              <Terminal className="w-4 h-4 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base sm:text-lg font-bold tracking-wider text-white group-hover:text-accent transition-colors">
                OLIVER_TECH
              </span>
              <span className="font-mono text-[9px] text-white/40 tracking-widest hidden sm:inline-block">
                SYS.ARCH // PROD_SUPPORT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label={t.nav.mainNavAria || 'Navegação Principal'}>
            {t.nav.links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wide rounded transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-white/5 border border-white/15'
                      : 'text-primary-muted hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <span className={isActive ? 'text-accent mr-1' : 'text-white/30 mr-1'}>
                    //
                  </span>
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions: PT | EN switch + CTA button */}
          <div className="hidden lg:flex items-center gap-3 md:gap-4">
            <LanguageSwitch />

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold tracking-wider text-white bg-accent/90 hover:bg-accent rounded border border-accent/60 shadow-accent-subtle transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              <MessageSquareCode className="w-3.5 h-3.5" />
              <span>{t.nav.cta}</span>
            </a>
          </div>

          {/* Mobile & Tablet Actions: Switch + Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitch />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? (t.nav.mobileMenuCloseAria || "Fechar menu de navegação") : (t.nav.mobileMenuOpenAria || "Abrir menu de navegação")}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded border border-white/10 bg-surface text-primary-muted hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-background/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {t.nav.links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[44px] flex items-center px-3 py-2 text-sm font-mono tracking-wide rounded border ${
                  activeSection === link.id
                    ? 'bg-accent/10 border-accent/40 text-white font-semibold'
                    : 'border-white/5 text-primary-muted hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-accent mr-2">&gt;</span>
                {link.label}
              </a>
            ))}

            <div className="pt-3">
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold tracking-wider text-white bg-accent hover:bg-accent/90 rounded border border-accent/60 shadow-accent-subtle"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>{t.nav.cta}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
