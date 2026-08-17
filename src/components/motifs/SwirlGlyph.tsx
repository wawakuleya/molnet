const ARM = "M50 50 C50 32 62 24 62 38 C62 48 52 50 50 50";

export function SwirlGlyph({
  className,
  style,
  arms = 3,
  ringed = false,
}: {
  className?: string;
  style?: React.CSSProperties;
  arms?: 1 | 2 | 3;
  ringed?: boolean;
}) {
  const rotations = [0, 120, 240].slice(0, arms);
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {ringed && (
        <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="1.5" />
      )}
      {rotations.map((rotation) => (
        <path
          key={rotation}
          d={ARM}
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          transform={`rotate(${rotation} 50 50)`}
        />
      ))}
    </svg>
  );
}
