export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">
      <span className="h-px w-8 bg-accent-red" />
      {children}
    </div>
  );
}
