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
    <div className="flex items-center gap-1 rounded-full border border-border-soft bg-bg-raised p-1 text-xs font-medium">
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            activeLocale === locale
              ? "bg-text-deep text-bg-pure"
              : "text-text-muted hover:text-text-deep"
          }`}
        >
          {labels[locale]}
        </Link>
      ))}
    </div>
  );
}
