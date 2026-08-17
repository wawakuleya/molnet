import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const PATHS = ["", "/about", "/services", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        zh: `${SITE_URL}${path}`,
        en: `${SITE_URL}/en${path}`,
      },
    },
  }));
}
