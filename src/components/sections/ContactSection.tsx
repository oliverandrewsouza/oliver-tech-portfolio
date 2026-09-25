import { useLanguage } from '../../context/LanguageContext';
import { TerminalBadge } from '../ui/TerminalBadge';
import { 
  Mail, 
  AlertCircle,
  Radio,
  ArrowUpRight
} from 'lucide-react';

export const ContactSection = () => {
  const { t } = useLanguage();

  const hasValidEmail = Boolean(
    t.contact.emailValue &&
    t.contact.emailValue.trim() !== '' &&
    !t.contact.emailValue.includes('[') &&
    t.contact.emailValue.toLowerCase() !== 'oliverandrewsouza@gmail.com'
  );

  return (
    <section id="contato" className="py-20 md:py-28 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <TerminalBadge variant="coral">
              {t.contact.tag}
            </TerminalBadge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-mono">
            {t.contact.title}
          </h2>

          <p className="text-base sm:text-lg text-primary max-w-2xl leading-relaxed">
            {t.contact.text}
          </p>
        </div>

        {/* Clean Direct Channels Layout (No fake backend form) */}
        <div className={hasValidEmail ? "grid grid-cols-1 md:grid-cols-12 gap-8 items-start" : "max-w-2xl"}>
          
          {/* Dedicated Space for Professional E-mail */}
          {hasValidEmail && (
            <div className="md:col-span-6 p-6 sm:p-8 rounded-xl bg-surface border-2 border-white/15 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-accent font-bold font-mono text-sm">
                  <Mail className="w-5 h-5" />
                  <span>{t.contact.emailLabel}</span>
                </div>
                <span className="text-[11px] font-mono text-white/50 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  {t.contact.emailReservedBadge || 'ESPAÇO RESERVADO'}
                </span>
              </div>

              <div className="p-4 rounded-lg bg-surface-card border-2 border-dashed border-white/20 font-mono text-sm text-white/80">
                <span className="select-all font-semibold text-white">{t.contact.emailValue}</span>
              </div>

              <div className="flex items-start gap-2 text-xs font-mono text-primary-muted pt-1">
                <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {t.contact.emailNotice}
                </p>
              </div>
            </div>
          )}

          {/* Direct Verified Links (LinkedIn, GitHub, Instagram) */}
          <div className={`${hasValidEmail ? 'md:col-span-6' : 'w-full'} p-6 sm:p-8 rounded-xl bg-surface border border-white/10 space-y-4`}>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider pb-2 border-b border-white/10">
              <Radio className="w-4 h-4 text-accent animate-pulse" />
              <span>{t.contact.channelsTitle}</span>
            </div>

            <div className="space-y-3 pt-1">
              {/* LinkedIn Link */}
              <a
                href={t.contact.socials.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] p-4 rounded-lg bg-surface-card border border-white/15 hover:border-accent text-sm font-mono text-white flex items-center justify-between transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0-.02-3.36 1.68 1.68 0 0 0 .02 3.36m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                  </svg>
                  <div>
                    <span className="font-bold text-white group-hover:text-accent transition-colors">LinkedIn</span>
                    <span className="text-xs text-primary-muted block">oliver-souza-55822920a</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </a>

              {/* GitHub Link */}
              <a
                href={t.contact.socials.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] p-4 rounded-lg bg-surface-card border border-white/15 hover:border-accent text-sm font-mono text-white flex items-center justify-between transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <div>
                    <span className="font-bold text-white group-hover:text-accent transition-colors">GitHub</span>
                    <span className="text-xs text-primary-muted block">oliverandrewsouza</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </a>

              {/* Instagram Link */}
              <a
                href={t.contact.socials.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] p-4 rounded-lg bg-surface-card border border-white/15 hover:border-accent text-sm font-mono text-white flex items-center justify-between transition-all focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div>
                    <span className="font-bold text-white group-hover:text-accent transition-colors">Instagram</span>
                    <span className="text-xs text-primary-muted block">@oliver.tech_</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
