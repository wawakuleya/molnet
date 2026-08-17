import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "./LogoMark";
import { Container } from "./Container";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  return (
    <footer className="border-t border-border-soft bg-bg-raised">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8" />
            <span className="font-header text-base font-semibold text-text-deep">
              Molnet 红云
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {t("tagline")}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            {t("columnsCompany")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/about" className="text-text-deep hover:text-accent-red">
                {tNav("about")}
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-text-deep hover:text-accent-red">
                {tNav("services")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-text-deep hover:text-accent-red">
                {tNav("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            {t("columnsContact")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-text-deep">
            <li>{tContact("infoEmail")}</li>
            <li>{tContact("infoPhone")}</li>
            <li>{tContact("infoAddress")}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border-soft">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-text-muted md:flex-row">
          <span>
            © {new Date().getFullYear()} Molnet Cultural Communication Limited ·
            红云文化传媒有限公司. {t("rights")}.
          </span>
        </Container>
      </div>
    </footer>
  );
}
