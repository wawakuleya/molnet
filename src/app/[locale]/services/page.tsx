import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
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
    },
    {
      title: t("service2Title"),
      desc: t("service2Desc"),
      points: [t("service2Point1"), t("service2Point2"), t("service2Point3")],
    },
    {
      title: t("service3Title"),
      desc: t("service3Desc"),
      points: [t("service3Point1"), t("service3Point2"), t("service3Point3")],
    },
    {
      title: t("service4Title"),
      desc: t("service4Desc"),
      points: [t("service4Point1"), t("service4Point2"), t("service4Point3")],
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
        <Container className="py-24">
          <div className="grid gap-10 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border-soft bg-bg-pure p-9">
                  <SwirlGlyph arms={1} className="h-5 w-5 text-copper" />
                  <h3 className="mt-4 font-header text-xl font-semibold text-text-deep">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {service.desc}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-text-deep"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-red" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border-soft">
        <Container className="py-24">
          <div className="max-w-2xl">
            <Eyebrow>{t("processEyebrow")}</Eyebrow>
            <h2 className="mt-5 font-header text-2xl font-semibold text-text-deep sm:text-3xl">
              {t("processTitle")}
            </h2>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-0 font-header text-2xl font-semibold text-border-soft">
                    0{i + 1}
                  </span>
                  <h3 className="font-header text-base font-semibold text-text-deep">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-text-deep">
        <SwirlField />
        <Container className="relative flex flex-col items-center gap-8 py-24 text-center">
          <h2 className="max-w-2xl font-header text-2xl font-semibold text-bg-pure sm:text-3xl">
            {t("ctaTitle")}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            {t("ctaBody")}
          </p>
          <ButtonLink
            href="/contact"
            variant="primary"
            className="bg-accent-red hover:bg-white hover:text-text-deep"
          >
            {t("ctaButton")}
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
