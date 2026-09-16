export const GridBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base technical grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-30" />

      {/* Subtle radial vignette to soften edges and focus the center */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(13, 16, 23, 0.4) 0%, rgba(7, 8, 12, 0.95) 85%)'
        }}
      />

      {/* Corner and coordinate markers */}
      <div className="hidden lg:block absolute top-24 left-8 text-[10px] font-mono text-white/20 select-none">
        + LOC: SP_BR // LAT: -23.55 // LNG: -46.63
      </div>
      <div className="hidden lg:block absolute top-24 right-8 text-[10px] font-mono text-white/20 select-none">
        SYS_STATUS: NOMINAL // PROTOCOL: HTTP/3 +
      </div>
      <div className="hidden lg:block absolute bottom-8 left-8 text-[10px] font-mono text-white/15 select-none">
        └─ SEC_LEVEL: HIGH_INTEGRITY
      </div>
      <div className="hidden lg:block absolute bottom-8 right-8 text-[10px] font-mono text-white/15 select-none">
        NODE_AFFINITY: BR-EAST-1 ─┘
      </div>
    </div>
  );
};
