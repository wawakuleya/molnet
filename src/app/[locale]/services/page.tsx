import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { SwirlGlyph } from "@/components/motifs/SwirlGlyph";
import { SwirlField } from "@/components/motifs/SwirlField";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Services />;
}

function Services() {
  const t = useTranslations("services");

  const services = [
    {
      title: t("service1Title"),
      desc: t("service1Desc"),
      points: [t("service1Point1"), t("service1Point2"), t("service1Point3")],
      arms: 1 as const,
      glow: "crimson" as const,
    },
    {
      title: t("service2Title"),
      desc: t("service2Desc"),
      points: [t("service2Point1"), t("service2Point2"), t("service2Point3")],
      arms: 2 as const,
      glow: "gold" as const,
    },
    {
      title: t("service3Title"),
      desc: t("service3Desc"),
      points: [t("service3Point1"), t("service3Point2"), t("service3Point3")],
      arms: 3 as const,
      glow: "crimson" as const,
    },
    {
      title: t("service4Title"),
      desc: t("service4Desc"),
      points: [t("service4Point1"), t("service4Point2"), t("service4Point3")],
      arms: 1 as const,
      glow: "gold" as const,
    },
  ];

  const process = [
    { title: t("process1Title"), desc: t("process1Desc") },
    { title: t("process2Title"), desc: t("process2Desc") },
    { title: t("process3Title"), desc: t("process3Desc") },
    { title: t("process4Title"), desc: t("process4Desc") },
  ];

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h1 className="mt-8 max-w-5xl font-header text-3xl font-semibold tracking-tight sm:text-4xl md:text-[40px] lg:text-[46px] lg:leading-[1.2]">
              <span className="gradient-heading inline-block">{t("title")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              {t("leadBody")}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Services Grid with Spotlight Highlighting */}
      <section className="relative border-y border-white/[0.08] bg-[#080d19]/60 py-24 backdrop-blur-md">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <SpotlightCard glowColor={service.glow} className="h-full">
                  <div className="flex h-full flex-col justify-between p-8 md:p-10">
                    <div>
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl border p-2 ${
                            service.glow === "gold"
                              ? "border-amber-500/30 bg-amber-500/10 text-amber-300 shadow-[0_0_20px_rgba(226,183,104,0.15)]"
                              : "border-rose-500/30 bg-rose-500/10 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                          }`}
                        >
                          <SwirlGlyph arms={service.arms} className="h-full w-full" />
                        </div>
                        <span className="font-header text-xs tracking-widest text-slate-600">
                          0{i + 1}
                        </span>
                      </div>

                      <h3 className="mt-6 font-header text-2xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                        {service.desc}
                      </p>

                      <ul className="mt-8 space-y-3 border-t border-white/[0.08] pt-6">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm text-slate-300"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-rose-400 to-amber-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>{t("processEyebrow")}</Eyebrow>
              <h2 className="mt-6 font-header text-3xl font-semibold text-white sm:text-4xl">
                {t("processTitle")}
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <SpotlightCard glowColor="subtle" className="h-full">
                  <div className="relative p-7 md:p-8">
                    <span className="font-header text-3xl font-semibold text-white/20 transition-colors group-hover:text-rose-400/50">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 font-header text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#070b15]/90 py-24 backdrop-blur-xl">
        <SwirlField />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-header text-3xl font-semibold text-white sm:text-4xl">
              <span className="gradient-heading">{t("ctaTitle")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              {t("ctaBody")}
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact" variant="primary">
                {t("ctaButton")}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
