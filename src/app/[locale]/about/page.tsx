import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
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
    { title: t("value1Title"), desc: t("value1Desc") },
    { title: t("value2Title"), desc: t("value2Desc") },
    { title: t("value3Title"), desc: t("value3Desc") },
    { title: t("value4Title"), desc: t("value4Desc") },
  ];

  return (
    <>
      <section className="border-b border-border-soft">
        <Container className="py-24 md:py-28">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-header text-4xl font-semibold tracking-tight text-text-deep sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            {t("leadBody")}
          </p>
        </Container>
      </section>

      <section className="border-b border-border-soft bg-bg-raised">
        <Container className="grid gap-16 py-24 md:grid-cols-2">
          <div>
            <Eyebrow>{t("storyEyebrow")}</Eyebrow>
            <h2 className="mt-5 font-header text-2xl font-semibold text-text-deep sm:text-3xl">
              {t("storyTitle")}
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-text-muted md:text-base">
            <p>{t("storyBody1")}</p>
            <p>{t("storyBody2")}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border-soft">
        <Container className="py-24">
          <div className="max-w-2xl">
            <Eyebrow>{t("valuesEyebrow")}</Eyebrow>
            <h2 className="mt-5 font-header text-2xl font-semibold text-text-deep sm:text-3xl">
              {t("valuesTitle")}
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <SwirlGlyph arms={1} className="h-5 w-5 text-copper" />
                <h3 className="mt-3 font-header text-lg font-semibold text-text-deep">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {value.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-border-soft bg-text-deep">
        <SwirlField />
        <Container className="relative py-24 text-center">
          <Reveal>
            <Eyebrow>
              <span className="text-copper">{t("philosophyEyebrow")}</span>
            </Eyebrow>
            <blockquote className="mx-auto mt-6 max-w-3xl font-header text-2xl font-semibold text-bg-pure sm:text-3xl">
              &ldquo;{t("philosophyQuote")}&rdquo;
            </blockquote>
            <p className="mt-3 text-sm text-white/50">
              {t("philosophyQuoteZh")}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              {t("philosophyBody")}
            </p>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-24">
          <div className="max-w-2xl">
            <Eyebrow>{t("teamEyebrow")}</Eyebrow>
            <h2 className="mt-5 font-header text-2xl font-semibold text-text-deep sm:text-3xl">
              {t("teamTitle")}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-text-muted md:text-base">
              {t("teamBody")}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
