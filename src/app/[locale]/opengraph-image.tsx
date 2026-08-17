import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = hasLocale(routing.locales, params.locale)
    ? params.locale
    : routing.defaultLocale;

  const logoBuffer = await readFile(
    path.join(process.cwd(), "public/logo-mark.png"),
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  const copy =
    locale === "en"
      ? {
          name: "Molnet",
          headline: "Where Culture Meets Capital",
          sub: "Intellect Meets Value.",
        }
      : {
          name: "红云文化传媒",
          headline: "文化与资本交汇",
          sub: "心智与价值共生。",
        };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b132b",
          color: "#f8f9fa",
        }}
      >
        <img src={logoSrc} width={96} height={88} style={{ marginBottom: 40 }} />
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#e63946",
            marginBottom: 24,
          }}
        >
          {copy.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {copy.headline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 16,
            color: "#9da1aa",
          }}
        >
          {copy.sub}
        </div>
      </div>
    ),
    { ...size },
  );
}
