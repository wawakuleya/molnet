import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink } from "@/components/Button";
import { LogoMark } from "@/components/LogoMark";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
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
    { title: t("pillar1Title"), desc: t("pillar1Desc"), iconArms: 1 as const },
    { title: t("pillar2Title"), desc: t("pillar2Desc"), iconArms: 2 as const },
    { title: t("pillar3Title"), desc: t("pillar3Desc"), iconArms: 3 as const },
    { title: t("pillar4Title"), desc: t("pillar4Desc"), iconArms: 1 as const },
  ];

  const stats = [
    { value: "12+", label: t("statsYears") },
    { value: "80+", label: t("statsProjects") },
    { value: "6", label: t("statsCities") },
    { value: "40+", label: t("statsClients") },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-24 md:pt-16 md:pb-36">
        {/* Subtle decorative background watermarks */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-[580px] w-[580px] opacity-[0.05] md:-right-10 md:opacity-[0.08]">
          <LogoMark className="h-full w-full" />
        </div>

        <Container className="relative">
          <Reveal>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-header text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:leading-[1.12]">
              <span className="gradient-heading block">{t("heroTitleLine1")}</span>
              <span className="mt-1 block text-white/90">{t("heroTitleLine2")}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              {t("heroSubtitle")}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/services" variant="primary">
                {t("heroCtaPrimary")}
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                {t("heroCtaSecondary")}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Intro & Stats Section */}
      <section className="relative border-y border-white/[0.08] bg-[#090d18]/60 py-24 backdrop-blur-md">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_1.3fr] lg:items-center">
            <div>
              <Reveal>
                <Eyebrow>{t("introEyebrow")}</Eyebrow>
                <h2 className="mt-6 font-header text-3xl font-semibold text-white sm:text-4xl">
                  {t("introTitle")}
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-slate-300 md:text-base">
                  {t("introBody")}
                </p>
              </Reveal>
            </div>

            {/* Glowing Spotlight Stats Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 80}>
                  <SpotlightCard glowColor="gold" className="h-full">
                    <div className="p-6 md:p-8">
                      <div className="font-header text-3xl font-semibold gradient-gold md:text-5xl">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-xs font-medium text-slate-400 md:text-sm">
                        {stat.label}
                      </div>
                      <div className="mt-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-amber-400 to-rose-400" />
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SwirlDivider className="py-10 opacity-40" />

      {/* Pillars Section with Spotlight Mouse Tracking */}
      <section className="relative py-20">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>{t("pillarsEyebrow")}</Eyebrow>
              <h2 className="mt-6 font-header text-3xl font-semibold text-white sm:text-4xl">
                {t("pillarsTitle")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
                {t("pillarsSubtitle")}
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90}>
                <SpotlightCard glowColor="crimson" className="h-full">
                  <div className="flex h-full flex-col justify-between p-8 md:p-10">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.15)]">
                          <SwirlGlyph arms={pillar.iconArms} className="h-6 w-6" />
                        </div>
                        <span className="font-header text-xs tracking-widest text-slate-600">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="mt-6 font-header text-xl font-semibold text-white transition-colors group-hover:text-rose-300">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-xs font-medium text-rose-400 opacity-80 transition-all group-hover:opacity-100">
                      <span>了解更多</span>
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand Philosophy Section */}
      <section className="relative my-12 overflow-hidden border-y border-white/[0.08] bg-[#080c16]/80 py-28 backdrop-blur-xl">
        <SwirlField />
        {/* Subtle center radiant spot */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-[120px]" />
        
        <Container className="relative text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 shadow-[0_0_20px_rgba(226,183,104,0.15)]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>{t("philosophyEyebrow")}</span>
            </div>

            <h2 className="mx-auto mt-8 max-w-5xl font-header text-2xl font-semibold tracking-tight sm:text-4xl md:text-[44px] lg:text-[48px] lg:leading-tight">
              <span className="gradient-gold block">
                {t("philosophyTitle")}
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              {t("philosophyBody")}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CTA Call to Action Section */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SpotlightCard glowColor="crimson" className="overflow-hidden">
              <div className="relative p-10 text-center md:p-16">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-500/[0.08] via-transparent to-transparent" />
                <h2 className="mx-auto max-w-2xl font-header text-3xl font-semibold text-white sm:text-4xl">
                  {t("ctaTitle")}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                  {t("ctaBody")}
                </p>
                <div className="mt-8 flex justify-center">
                  <ButtonLink href="/contact" variant="primary">
                    {t("ctaButton")}
                  </ButtonLink>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
