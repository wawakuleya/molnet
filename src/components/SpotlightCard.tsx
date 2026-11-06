"use client";

import React, { useRef, useState } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "crimson" | "gold" | "subtle";
}

export function SpotlightCard({
  children,
  className = "",
  glowColor = "crimson",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getBorderGlow = () => {
    switch (glowColor) {
      case "gold":
        return "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(226, 183, 104, 0.65), rgba(244, 63, 94, 0.2) 30%, transparent 70%)";
      case "subtle":
        return "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.35), transparent 70%)";
      case "crimson":
      default:
        return "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(244, 63, 94, 0.7), rgba(226, 183, 104, 0.25) 35%, transparent 70%)";
    }
  };

  const getInnerSheen = () => {
    switch (glowColor) {
      case "gold":
        return "radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(226, 183, 104, 0.08), transparent 70%)";
      case "subtle":
        return "radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.04), transparent 70%)";
      case "crimson":
      default:
        return "radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(244, 63, 94, 0.09), transparent 70%)";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        {
          "--mouse-x": `${mousePos.x}px`,
          "--mouse-y": `${mousePos.y}px`,
        } as React.CSSProperties
      }
      className={`group relative rounded-2xl p-[1px] transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Dynamic tracking border highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500 ease-out"
        style={{
          background: getBorderGlow(),
          opacity: isHovered ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Static subtle border fallback */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border border-white/[0.08] transition-colors duration-300 group-hover:border-white/[0.15]"
        aria-hidden="true"
      />

      {/* Inner card surface */}
      <div className="relative h-full w-full overflow-hidden rounded-[15px] bg-[#0c111e]/85 backdrop-blur-xl transition-all duration-300 group-hover:bg-[#0f1627]/90">
        {/* Dynamic tracking inner face sheen */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            background: getInnerSheen(),
            opacity: isHovered ? 1 : 0,
          }}
          aria-hidden="true"
        />

        {/* Card content */}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
}
