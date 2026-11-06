export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.15)] backdrop-blur-md ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
      <span>{children}</span>
    </div>
  );
}
