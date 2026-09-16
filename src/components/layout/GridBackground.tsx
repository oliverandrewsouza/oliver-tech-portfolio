import { useRef, useEffect } from 'react';

// Pixelated geometric clusters and sparse square elements
const PixelElements = ({ isHighlighted = false }: { isHighlighted?: boolean }) => {
  const fill = '#38BDF8';
  const clusterOpacity = isHighlighted ? 0.85 : 0.16;
  const squareOpacity = isHighlighted ? 0.9 : 0.22;
  const strokeColor = isHighlighted ? 'rgba(56, 189, 248, 0.9)' : 'rgba(56, 189, 248, 0.3)';

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none select-none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cluster 1: Top-Right (Hero negative space) - Fragmented concentric data arc */}
      <svg x="78%" y="10%" width="140" height="140" viewBox="0 0 140 140" className="overflow-visible hidden md:block">
        <g fill={fill} fillOpacity={clusterOpacity} stroke={strokeColor} strokeWidth="0.5">
          {/* Inner arc */}
          <rect x="40" y="20" width="5" height="5" />
          <rect x="50" y="22" width="5" height="5" />
          <rect x="60" y="26" width="5" height="5" />
          <rect x="70" y="32" width="5" height="5" />
          <rect x="78" y="42" width="5" height="5" />
          <rect x="82" y="54" width="5" height="5" />
          <rect x="84" y="66" width="5" height="5" />
          {/* Outer stepped arc with telemetry gaps */}
          <rect x="30" y="8" width="6" height="6" />
          <rect x="42" y="10" width="6" height="6" />
          <rect x="56" y="14" width="6" height="6" />
          <rect x="80" y="24" width="6" height="6" />
          <rect x="92" y="38" width="6" height="6" />
          <rect x="100" y="54" width="6" height="6" />
          <rect x="104" y="72" width="6" height="6" />
          <rect x="102" y="90" width="6" height="6" />
          {/* Fragmented signal bits */}
          <rect x="20" y="35" width="4" height="4" />
          <rect x="115" y="48" width="4" height="4" />
          <rect x="110" y="105" width="4" height="4" />
          <rect x="68" y="96" width="4" height="4" />
        </g>
      </svg>

      {/* Cluster 2: Mid-Left (Experience / Sobre margin) - Digital data waveform */}
      <svg x="2%" y="38%" width="130" height="130" viewBox="0 0 130 130" className="overflow-visible hidden sm:block">
        <g fill={fill} fillOpacity={clusterOpacity} stroke={strokeColor} strokeWidth="0.5">
          {/* Stepped telemetry bars */}
          <rect x="10" y="70" width="4" height="24" />
          <rect x="18" y="58" width="4" height="36" />
          <rect x="26" y="45" width="4" height="49" />
          <rect x="34" y="52" width="4" height="42" />
          <rect x="42" y="35" width="4" height="59" />
          <rect x="50" y="28" width="4" height="66" />
          <rect x="58" y="40" width="4" height="54" />
          <rect x="66" y="60" width="4" height="34" />
          <rect x="74" y="75" width="4" height="19" />
          {/* Floating packet bits */}
          <rect x="18" y="46" width="4" height="4" />
          <rect x="42" y="22" width="4" height="4" />
          <rect x="50" y="14" width="4" height="4" />
          <rect x="58" y="28" width="4" height="4" />
          <rect x="85" y="68" width="4" height="4" />
        </g>
      </svg>

      {/* Cluster 3: Mid-Right (DocPed lateral margin) - Modular telemetry density block */}
      <svg x="88%" y="62%" width="130" height="130" viewBox="0 0 130 130" className="overflow-visible hidden md:block">
        <g fill={fill} fillOpacity={clusterOpacity} stroke={strokeColor} strokeWidth="0.5">
          <rect x="20" y="20" width="5" height="5" />
          <rect x="28" y="20" width="5" height="5" />
          <rect x="36" y="20" width="5" height="5" />
          <rect x="20" y="28" width="5" height="5" />
          <rect x="28" y="28" width="5" height="5" />
          <rect x="36" y="28" width="5" height="5" />
          <rect x="44" y="28" width="5" height="5" />
          <rect x="28" y="36" width="5" height="5" />
          <rect x="36" y="36" width="5" height="5" />
          <rect x="44" y="36" width="5" height="5" />
          <rect x="52" y="36" width="5" height="5" />
          <rect x="36" y="44" width="5" height="5" />
          <rect x="44" y="44" width="5" height="5" />
          <rect x="52" y="44" width="5" height="5" />
          <rect x="60" y="44" width="5" height="5" />
          <rect x="44" y="52" width="5" height="5" />
          <rect x="52" y="52" width="5" height="5" />
          <rect x="60" y="52" width="5" height="5" />
          <rect x="68" y="52" width="5" height="5" />
          <rect x="60" y="60" width="5" height="5" />
          <rect x="68" y="60" width="5" height="5" />
          <rect x="76" y="60" width="5" height="5" />
        </g>
      </svg>

      {/* Cluster 4: Bottom-Left (OliverTech / Contact margin) - Discontinuous telemetry tracks */}
      <svg x="4%" y="82%" width="140" height="110" viewBox="0 0 140 110" className="overflow-visible hidden sm:block">
        <g fill={fill} fillOpacity={clusterOpacity} stroke={strokeColor} strokeWidth="0.5">
          <rect x="12" y="20" width="8" height="4" />
          <rect x="24" y="20" width="4" height="4" />
          <rect x="32" y="20" width="12" height="4" />
          <rect x="48" y="20" width="6" height="4" />
          <rect x="18" y="32" width="14" height="4" />
          <rect x="36" y="32" width="6" height="4" />
          <rect x="46" y="32" width="10" height="4" />
          <rect x="60" y="32" width="4" height="4" />
          <rect x="28" y="44" width="8" height="4" />
          <rect x="40" y="44" width="16" height="4" />
          <rect x="62" y="44" width="6" height="4" />
          <rect x="22" y="56" width="6" height="4" />
          <rect x="34" y="56" width="10" height="4" />
          <rect x="52" y="56" width="14" height="4" />
          <rect x="72" y="56" width="4" height="4" />
        </g>
      </svg>

      {/* Sparse permanently lit squares in negative spaces across viewport */}
      <g fill={fill} fillOpacity={squareOpacity} stroke={strokeColor} strokeWidth="0.5">
        <rect x="15%" y="18%" width="4" height="4" />
        <rect x="25%" y="32%" width="5" height="5" />
        <rect x="72%" y="16%" width="4" height="4" />
        <rect x="85%" y="30%" width="5" height="5" />
        <rect x="94%" y="46%" width="4" height="4" />
        <rect x="11%" y="62%" width="5" height="5" />
        <rect x="20%" y="74%" width="4" height="4" />
        <rect x="68%" y="76%" width="5" height="5" />
        <rect x="84%" y="84%" width="4" height="4" />
        <rect x="36%" y="90%" width="4" height="4" />
      </g>
    </svg>
  );
};

export const GridBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bgEl = backgroundRef.current;
    if (!bgEl) return;

    // Detect touch-only devices or preference for reduced motion
    const hasCoarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasCoarsePointer || prefersReducedMotion) {
      return;
    }

    let rafId: number | null = null;
    let targetX = -999;
    let targetY = -999;

    const updateSpotlightPosition = () => {
      if (bgEl) {
        bgEl.style.setProperty('--pointer-x', `${targetX}px`);
        bgEl.style.setProperty('--pointer-y', `${targetY}px`);
      }
      rafId = null;
    };

    const handlePointerEnter = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      targetX = e.clientX;
      targetY = e.clientY;
      bgEl.style.setProperty('--spotlight-opacity', '1');
      if (rafId === null) {
        rafId = requestAnimationFrame(updateSpotlightPosition);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      targetX = e.clientX;
      targetY = e.clientY;
      bgEl.style.setProperty('--spotlight-opacity', '1');
      if (rafId === null) {
        rafId = requestAnimationFrame(updateSpotlightPosition);
      }
    };

    const handlePointerLeave = () => {
      bgEl.style.setProperty('--spotlight-opacity', '0');
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    window.addEventListener('pointerenter', handlePointerEnter);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointerenter', handlePointerEnter);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div 
      ref={backgroundRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" 
      aria-hidden="true"
    >
      {/* Layer 1: Base subtle technical grid */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Layer 1B: Radial vignette framing viewport edges */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 35%, rgba(7, 8, 12, 0.2) 0%, rgba(7, 8, 12, 0.85) 75%, rgba(7, 8, 12, 0.98) 100%)'
        }}
      />

      {/* Layer 2A: Global base ambient dot matrix */}
      <div
        className="absolute inset-0 opacity-20 sm:opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(56, 189, 248, 0.28) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, black 40%, rgba(0, 0, 0, 0.4) 80%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, black 40%, rgba(0, 0, 0, 0.4) 80%, transparent 100%)',
        }}
      />

      {/* Layer 2B: Global base geometric pixel clusters and sparse squares */}
      <PixelElements isHighlighted={false} />

      {/* Layer 3: Global illuminated dots & pixels revealed within cursor spotlight beam */}
      <div
        className="global-interactive-layer absolute inset-0 pointer-events-none select-none transition-opacity duration-400"
        aria-hidden="true"
        style={{
          opacity: 'var(--spotlight-opacity, 0)',
          maskImage: 'radial-gradient(circle 340px at var(--pointer-x, -999px) var(--pointer-y, -999px), black 0%, rgba(0, 0, 0, 0.45) 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle 340px at var(--pointer-x, -999px) var(--pointer-y, -999px), black 0%, rgba(0, 0, 0, 0.45) 50%, transparent 100%)',
        }}
      >
        {/* High-intensity dots */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(56, 189, 248, 0.95) 1.25px, transparent 1.25px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* High-intensity pixel clusters and illuminated squares */}
        <PixelElements isHighlighted={true} />
      </div>

      {/* Layer 4: Global diffuse radial spotlight beam */}
      <div
        className="global-interactive-layer absolute inset-0 pointer-events-none select-none transition-opacity duration-400"
        aria-hidden="true"
        style={{
          opacity: 'var(--spotlight-opacity, 0)',
          background: `radial-gradient(
            circle 340px at var(--pointer-x, -999px) var(--pointer-y, -999px),
            rgba(56, 189, 248, 0.17) 0%,
            rgba(37, 99, 235, 0.08) 45%,
            rgba(255, 77, 77, 0.012) 75%,
            transparent 100%
          )`,
        }}
      />

      {/* Static subtle ambient backlight auras for mobile, reduced motion and depth */}
      <div
        className="absolute top-[14%] right-[6%] w-[380px] h-[380px] max-w-[80vw] max-h-[80vw] pointer-events-none select-none opacity-40 sm:opacity-50"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(37, 99, 235, 0.03) 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[16%] left-[6%] w-[350px] h-[350px] max-w-[80vw] max-h-[80vw] pointer-events-none select-none opacity-30 sm:opacity-40"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, rgba(37, 99, 235, 0.02) 45%, transparent 70%)',
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

