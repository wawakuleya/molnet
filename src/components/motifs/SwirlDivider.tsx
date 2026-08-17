import { SwirlGlyph } from "./SwirlGlyph";

export function SwirlDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 bg-border-soft sm:w-24" />
      <SwirlGlyph arms={1} className="h-4 w-4 text-copper" />
      <span className="h-px w-16 bg-border-soft sm:w-24" />
    </div>
  );
}
