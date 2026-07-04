export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  const ink = light ? "#FAF8F4" : "#221C16";
  return (
    <svg viewBox="0 0 168 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="KOSHA">
      {/* monogram: a plan-view square with a threshold cut — the mark of a doorway */}
      <rect x="1.5" y="1.5" width="31" height="31" stroke={ink} strokeWidth="1.4" />
      <rect x="6.5" y="6.5" width="21" height="21" stroke="#A8895B" strokeWidth="1" />
      <path d="M17 1.5 V10" stroke={ink} strokeWidth="1.4" />
      <path d="M17 24 V32.5" stroke={ink} strokeWidth="1.4" />
      <text x="46" y="24.5" fill={ink} fontFamily="var(--font-marcellus), Georgia, serif" fontSize="21" letterSpacing="7">
        KOSHA
      </text>
    </svg>
  );
}
