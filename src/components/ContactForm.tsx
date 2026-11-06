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
      <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-12 text-center shadow-[0_0_30px_rgba(244,63,94,0.15)]">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20 text-rose-300">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-header text-xl font-semibold text-white">
          {t("formSubmit")}
        </p>
        <p className="mt-2 text-sm text-slate-300">
          我们将尽快与您取得联系。
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
        <label className="mb-2 block text-sm font-medium text-slate-300">
          {t("formMessage")}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t("formMessagePlaceholder")}
          className="w-full rounded-xl border border-white/10 bg-[#070b15]/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_24px_rgba(244,63,94,0.35)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(244,63,94,0.6)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 sm:w-auto"
      >
        {t("formSubmit")}
      </button>
      <p className="text-xs text-slate-400">{t("formNote")}</p>
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
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-[#070b15]/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none backdrop-blur-md transition-all duration-300 focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
      />
    </div>
  );
}
