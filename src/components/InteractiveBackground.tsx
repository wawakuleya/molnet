"use client";

import { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const mouseGlowRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animate = () => {
      // Smooth linear interpolation (lerp)
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;
      currentPos.current.x += dx * 0.08;
      currentPos.current.y += dy * 0.08;

      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic interactive mouse follower glow */}
      <div
        ref={mouseGlowRef}
        className="will-change-transform absolute -left-48 -top-48 h-96 w-96 rounded-full opacity-60 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(circle, rgba(244, 63, 94, 0.15) 0%, rgba(226, 183, 104, 0.08) 35%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Floating Aurora Ambient Orbs */}
      <div
        className="animate-aurora-1 absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(225, 29, 72, 0.22) 0%, rgba(225, 29, 72, 0.05) 50%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />

      <div
        className="animate-aurora-2 absolute right-0 top-1/4 h-[550px] w-[550px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(226, 183, 104, 0.15) 0%, rgba(244, 63, 94, 0.06) 45%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div
        className="animate-aurora-1 absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(244, 63, 94, 0.06) 40%, transparent 70%)",
          filter: "blur(110px)",
        }}
      />

      {/* Subtle luxury dot matrix pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 95%)",
        }}
      />

      {/* Subtle vignette gradient from edges */}
      <div className="absolute inset-0 bg-radial-vignette opacity-40" />
    </div>
  );
}
