export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`spec flex items-center gap-4 ${light ? "text-brass-soft" : "text-brass"}`}>
      <span aria-hidden className={`inline-block h-px w-10 ${light ? "bg-brass-soft" : "bg-brass"}`} />
      {children}
    </p>
  );
}
