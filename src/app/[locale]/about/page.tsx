import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { SwirlGlyph } from "@/components/motifs/SwirlGlyph";
import { SwirlField } from "@/components/motifs/SwirlField";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <About />;
}

function About() {
  const t = useTranslations("about");

  const values = [
    { title: t("value1Title"), desc: t("value1Desc"), glow: "crimson" as const },
    { title: t("value2Title"), desc: t("value2Desc"), glow: "gold" as const },
    { title: t("value3Title"), desc: t("value3Desc"), glow: "crimson" as const },
    { title: t("value4Title"), desc: t("value4Desc"), glow: "gold" as const },
  ];

  return (
    <>
      {/* Hero Header */}
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

      {/* Story Section */}
      <section className="relative border-y border-white/[0.08] bg-[#080d19]/60 py-24 backdrop-blur-md">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <Reveal>
              <Eyebrow>{t("storyEyebrow")}</Eyebrow>
              <h2 className="mt-6 font-header text-3xl font-semibold text-white sm:text-4xl">
                {t("storyTitle")}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-white/10 bg-[#0e1424]/70 p-8 shadow-xl backdrop-blur-md md:p-10">
                <div className="space-y-6 text-sm leading-relaxed text-slate-300 md:text-base">
                  <p>{t("storyBody1")}</p>
                  <p>{t("storyBody2")}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>{t("valuesEyebrow")}</Eyebrow>
              <h2 className="mt-6 font-header text-3xl font-semibold text-white sm:text-4xl">
                {t("valuesTitle")}
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <SpotlightCard glowColor={value.glow} className="h-full">
                  <div className="p-7 md:p-8">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border ${
                        value.glow === "gold"
                          ? "border-amber-500/30 bg-amber-500/10 text-amber-300"
                          : "border-rose-500/30 bg-rose-500/10 text-rose-400"
                      }`}
                    >
                      <SwirlGlyph arms={1} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-header text-lg font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {value.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#070b15]/90 py-28 backdrop-blur-xl">
        <SwirlField />
        <Container className="relative text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 shadow-[0_0_20px_rgba(226,183,104,0.15)]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>{t("philosophyEyebrow")}</span>
            </div>

            <blockquote className="mx-auto mt-8 max-w-3xl font-header text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              &ldquo;<span className="gradient-gold">{t("philosophyQuote")}</span>&rdquo;
            </blockquote>

            <p className="mt-3 text-sm text-slate-400">
              {t("philosophyQuoteZh")}
            </p>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-300">
              {t("philosophyBody")}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Team / Vision Section */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-[#0d1322]/80 p-8 shadow-2xl backdrop-blur-xl md:p-14">
              <div className="max-w-2xl">
                <Eyebrow>{t("teamEyebrow")}</Eyebrow>
                <h2 className="mt-6 font-header text-3xl font-semibold text-white sm:text-4xl">
                  {t("teamTitle")}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-300">
                  {t("teamBody")}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
