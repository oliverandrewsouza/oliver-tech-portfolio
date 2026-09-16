interface BlinkingCursorProps {
  char?: string;
  className?: string;
}

export const BlinkingCursor = ({ 
  char = '▋', 
  className = 'text-accent' 
}: BlinkingCursorProps) => {
  return (
    <span 
      aria-hidden="true"
      className={`inline-block ml-0.5 animate-blink select-none font-mono font-normal opacity-90 ${className}`}
    >
      {char}
    </span>
  );
};
