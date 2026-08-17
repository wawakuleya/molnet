"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LogoMark } from "./LogoMark";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Container } from "./Container";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-bg-pure/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark className="h-9 w-9" />
          <span className="flex flex-col leading-tight font-header">
            <span className="text-base font-semibold tracking-tight text-text-deep">
              Molnet <span className="font-normal">红云</span>
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent-red"
                    : "text-text-deep hover:text-accent-red"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="rounded-full bg-text-deep px-5 py-2.5 text-sm font-medium text-bg-pure hover:bg-accent-red"
          >
            {t("cta")}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft md:hidden"
          aria-label="Menu"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-text-deep transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-4 bg-text-deep transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </Container>

      {open && (
        <div className="border-t border-border-soft bg-bg-pure md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-text-deep hover:bg-bg-raised"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between px-3 pt-3">
              <LanguageSwitcher />
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-text-deep px-5 py-2.5 text-sm font-medium text-bg-pure"
              >
                {t("cta")}
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
