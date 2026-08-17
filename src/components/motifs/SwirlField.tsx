import { SwirlGlyph } from "./SwirlGlyph";

const SPECS = [
  { top: "8%", left: "6%", size: 64, rotate: -12 },
  { top: "62%", left: "2%", size: 40, rotate: 24 },
  { top: "15%", left: "88%", size: 52, rotate: 8 },
  { top: "70%", left: "92%", size: 72, rotate: -20 },
  { top: "40%", left: "48%", size: 34, rotate: 40 },
  { top: "85%", left: "40%", size: 46, rotate: -6 },
];

export function SwirlField({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {SPECS.map((spec, i) => (
        <SwirlGlyph
          key={i}
          arms={3}
          className="absolute text-copper opacity-[0.08]"
          style={{
            top: spec.top,
            left: spec.left,
            width: spec.size,
            height: spec.size,
            transform: `rotate(${spec.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
