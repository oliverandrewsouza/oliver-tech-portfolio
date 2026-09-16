import type { ReactNode } from 'react';

interface TerminalBadgeProps {
  children: ReactNode;
  variant?: 'coral' | 'docped' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  pulse?: boolean;
  className?: string;
}

export const TerminalBadge = ({
  children,
  variant = 'neutral',
  size = 'sm',
  pulse = false,
  className = '',
}: TerminalBadgeProps) => {
  const sizeClasses = size === 'sm' ? 'text-xs px-2.5 py-1' : 'text-sm px-3.5 py-1.5';

  const variantStyles = {
    coral: 'bg-accent/10 text-accent border-accent/30',
    docped: 'bg-docped/10 text-docped-light border-docped/30',
    neutral: 'bg-surface-muted text-primary-muted border-white/10',
    outline: 'bg-transparent text-primary/80 border-white/15',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono tracking-wider uppercase rounded border font-medium select-none transition-colors ${sizeClasses} ${variantStyles} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              variant === 'docped' ? 'bg-docped' : 'bg-accent'
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              variant === 'docped' ? 'bg-docped' : 'bg-accent'
            }`}
          />
        </span>
      )}
      {children}
    </span>
  );
};
