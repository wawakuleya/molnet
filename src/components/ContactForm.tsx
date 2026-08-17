"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border-soft bg-bg-raised p-10 text-center">
        <p className="font-header text-lg font-semibold text-text-deep">
          {t("formSubmit")} ✓
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t("formName")} placeholder={t("formNamePlaceholder")} name="name" />
        <Field
          label={t("formEmail")}
          placeholder={t("formEmailPlaceholder")}
          name="email"
          type="email"
        />
      </div>
      <Field
        label={t("formCompany")}
        placeholder={t("formCompanyPlaceholder")}
        name="company"
      />
      <div>
        <label className="mb-2 block text-sm font-medium text-text-deep">
          {t("formMessage")}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t("formMessagePlaceholder")}
          className="w-full rounded-xl border border-border-soft bg-bg-pure px-4 py-3 text-sm text-text-deep placeholder:text-text-muted/60 focus:border-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-pure"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-text-deep px-7 py-3.5 text-sm font-medium text-bg-pure hover:bg-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-pure sm:w-auto"
      >
        {t("formSubmit")}
      </button>
      <p className="text-xs text-text-muted">{t("formNote")}</p>
    </form>
  );
}

function Field({
  label,
  placeholder,
  name,
  type = "text",
}: {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-text-deep">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border-soft bg-bg-pure px-4 py-3 text-sm text-text-deep outline-none placeholder:text-text-muted/60 focus:border-accent-red"
      />
    </div>
  );
}
