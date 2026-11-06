import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Contact />;
}

function Contact() {
  const t = useTranslations("contact");

  const info = [
    { label: t("infoAddressLabel"), value: t("infoAddress") },
    { label: t("infoPhoneLabel"), value: t("infoPhone") },
    { label: t("infoEmailLabel"), value: t("infoEmail") },
    { label: t("infoHoursLabel"), value: t("infoHours") },
  ];

  return (
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

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal delay={100}>
            <div>
              <h2 className="font-header text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {t("infoTitle")}
              </h2>
              <dl className="mt-6 space-y-4">
                {info.map((item) => (
                  <SpotlightCard key={item.label} glowColor="subtle" className="w-full">
                    <div className="p-5">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-white">
                        {item.value}
                      </dd>
                    </div>
                  </SpotlightCard>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl border border-white/10 bg-[#0e1424]/80 p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
