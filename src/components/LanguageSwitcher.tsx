"use client";

import { usePathname, Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  zh: "中",
  en: "EN",
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const activeLocale = params.locale as string;

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs font-medium backdrop-blur-md">
      {routing.locales.map((locale) => {
        const isActive = activeLocale === locale;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            className={`rounded-full px-2.5 py-1 text-xs transition-all duration-200 ${
              isActive
                ? "bg-rose-500/20 text-rose-200 shadow-[0_0_12px_rgba(244,63,94,0.3)] border border-rose-500/30 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {labels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
