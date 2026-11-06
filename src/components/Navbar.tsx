"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LogoMark } from "./LogoMark";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 pointer-events-none md:top-5">
      <div
        className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-6 md:py-3 ${
          scrolled
            ? "bg-[#0b101d]/85 border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(244,63,94,0.08)] backdrop-blur-2xl"
            : "bg-[#0b101d]/65 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
        }`}
      >
        {/* Logo and Brand */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/10 p-1 border border-rose-500/20 transition-transform duration-300 group-hover:scale-105">
            <LogoMark className="h-6 w-6" />
            <div className="absolute inset-0 rounded-full bg-rose-500/20 blur-sm opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <span className="flex items-center gap-1.5 font-header text-sm font-semibold tracking-tight text-white md:text-base">
            <span>Molnet</span>
            <span className="font-normal text-rose-400">红云</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 md:text-sm ${
                  isActive
                    ? "text-white bg-white/[0.08] border border-white/10 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-400 to-amber-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3.5 md:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] font-medium"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 transition-all duration-300 group-hover:opacity-90" />
            <span className="relative flex items-center gap-1.5 rounded-full bg-[#0c111e]/90 px-4 py-1.5 text-xs font-medium text-white transition-all duration-300 group-hover:bg-opacity-0">
              <span>{t("cta")}</span>
              <svg
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur-md md:hidden"
          aria-label="Menu"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-white transition-all duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-4 bg-white transition-all duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown Modal */}
      {open && (
        <div className="pointer-events-auto absolute left-4 right-4 top-16 rounded-3xl border border-white/15 bg-[#0b101d]/95 p-5 shadow-2xl backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-rose-500/15 text-rose-300 border border-rose-500/20"
                      : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-4">
              <LanguageSwitcher />
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-to-r from-rose-500 to-amber-500 px-5 py-2 text-xs font-medium text-white shadow-lg"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
