interface ScanlineOverlayProps {
  enabled: boolean;
}

export function ScanlineOverlay({ enabled }: ScanlineOverlayProps) {
  if (!enabled) return null;

  return (
    <>
      <div className="scanline-overlay" aria-hidden="true" />
      <div className="scanline-beam" aria-hidden="true" />
    </>
  );
}
