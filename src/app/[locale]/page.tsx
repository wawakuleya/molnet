import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink } from "@/components/Button";
import { LogoMark } from "@/components/LogoMark";
import { Reveal } from "@/components/Reveal";
import { SwirlGlyph } from "@/components/motifs/SwirlGlyph";
import { SwirlDivider } from "@/components/motifs/SwirlDivider";
import { SwirlField } from "@/components/motifs/SwirlField";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Home />;
}

function Home() {
  const t = useTranslations("home");

  const pillars = [
    { title: t("pillar1Title"), desc: t("pillar1Desc") },
    { title: t("pillar2Title"), desc: t("pillar2Desc") },
    { title: t("pillar3Title"), desc: t("pillar3Desc") },
    { title: t("pillar4Title"), desc: t("pillar4Desc") },
  ];

  const stats = [
    { value: "12+", label: t("statsYears") },
    { value: "80+", label: t("statsProjects") },
    { value: "6", label: t("statsCities") },
    { value: "40+", label: t("statsClients") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <LogoMark className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] opacity-[0.06] md:-right-10" />
        <Container className="relative py-28 md:py-36">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-header text-4xl font-semibold tracking-tight text-text-deep sm:text-5xl md:text-6xl">
            {t("heroTitleLine1")}
            <br />
            {t("heroTitleLine2")}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
            {t("heroSubtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/services" variant="primary">
              {t("heroCtaPrimary")}
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              {t("heroCtaSecondary")}
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Intro + Stats */}
      <section className="border-t border-border-soft bg-bg-raised">
        <Container className="py-24">
          <div className="grid gap-16 md:grid-cols-2 md:items-start">
            <div>
              <Eyebrow>{t("introEyebrow")}</Eyebrow>
              <h2 className="mt-5 font-header text-2xl font-semibold text-text-deep sm:text-3xl">
                {t("introTitle")}
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
                {t("introBody")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 70}>
                  <div className="border-l-2 border-accent-red pl-5">
                    <div className="font-header text-3xl font-semibold text-text-deep md:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-text-muted md:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SwirlDivider className="bg-bg-raised py-10" />

      {/* Pillars */}
      <section className="bg-bg-raised">
        <Container className="pb-24">
          <div className="max-w-2xl">
            <Eyebrow>{t("pillarsEyebrow")}</Eyebrow>
            <h2 className="mt-5 font-header text-2xl font-semibold text-text-deep sm:text-3xl">
              {t("pillarsTitle")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-text-muted md:text-base">
              {t("pillarsSubtitle")}
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80}>
                <div className="group h-full bg-bg-pure p-8 transition-colors hover:bg-bg-raised">
                  <SwirlGlyph arms={1} className="h-5 w-5 text-copper" />
                  <h3 className="mt-4 font-header text-lg font-semibold text-text-deep">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden border-t border-border-soft bg-text-deep">
        <SwirlField />
        <Container className="relative py-24 text-center">
          <Reveal>
            <Eyebrow>
              <span className="text-copper">{t("philosophyEyebrow")}</span>
            </Eyebrow>
            <h2 className="mx-auto mt-6 max-w-3xl font-header text-3xl font-semibold text-bg-pure sm:text-4xl">
              {t("philosophyTitle")}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              {t("philosophyBody")}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border-soft">
        <Container className="flex flex-col items-center gap-8 py-24 text-center">
          <h2 className="max-w-2xl font-header text-2xl font-semibold text-text-deep sm:text-3xl">
            {t("ctaTitle")}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-text-muted md:text-base">
            {t("ctaBody")}
          </p>
          <ButtonLink href="/contact" variant="primary">
            {t("ctaButton")}
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
