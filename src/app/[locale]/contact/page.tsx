import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { ContactForm } from "@/components/ContactForm";

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
    <section>
      <Container className="py-24 md:py-28">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h1 className="mt-6 max-w-3xl font-header text-4xl font-semibold tracking-tight text-text-deep sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
          {t("leadBody")}
        </p>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-header text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
              {t("infoTitle")}
            </h2>
            <dl className="mt-6 space-y-6">
              {info.map((item) => (
                <div key={item.label} className="border-l-2 border-accent-red pl-5">
                  <dt className="text-xs text-text-muted">{item.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-text-deep">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-border-soft bg-bg-raised p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
