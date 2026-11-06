import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "./LogoMark";
import { Container } from "./Container";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#090d17]/80 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
      <Container className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1.2fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500/10 p-1 border border-rose-500/20">
              <LogoMark className="h-6 w-6" />
            </div>
            <span className="font-header text-base font-semibold text-white">
              Molnet <span className="font-normal text-rose-400">红云</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {t("tagline")}
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500/80 animate-pulse" />
            <span>Connecting Culture & Capital Worldwide</span>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {t("columnsCompany")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/about" className="text-slate-300 transition-colors hover:text-rose-400">
                {tNav("about")}
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-300 transition-colors hover:text-rose-400">
                {tNav("services")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-300 transition-colors hover:text-rose-400">
                {tNav("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {t("columnsContact")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              {tContact("infoEmail")}
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              {tContact("infoPhone")}
            </li>
            <li className="flex items-start gap-2 text-slate-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
              {tContact("infoAddress")}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/[0.06] py-6">
        <Container className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Molnet Cultural Communication LLC. {t("rights")}.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400">Inspire Minds. Cultivate Value.</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
