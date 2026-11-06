import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 text-white shadow-[0_0_24px_rgba(244,63,94,0.35)] hover:shadow-[0_0_32px_rgba(244,63,94,0.6)] hover:brightness-110 border border-white/20",
  secondary:
    "border border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.1] hover:border-white/40 backdrop-blur-md shadow-sm",
  ghost:
    "text-slate-300 hover:text-white hover:bg-white/[0.06]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
} & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090e] ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
