import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-text-deep text-bg-pure hover:bg-accent-red",
  secondary:
    "border border-text-deep text-text-deep hover:border-accent-red hover:text-accent-red",
  ghost:
    "text-text-deep hover:text-accent-red",
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
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-pure ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
