import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "zh"],
  defaultLocale: "en",
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/about": {
      zh: "/about",
      en: "/about",
    },
    "/services": {
      zh: "/services",
      en: "/services",
    },
    "/contact": {
      zh: "/contact",
      en: "/contact",
    },
  },
});

export type AppLocale = (typeof routing.locales)[number];
