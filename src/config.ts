import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "de", "fr", "pt", "es"] as const;

export const pathnames = {
  "/": "/",
  "/map": "/map",
  "/listing": "/listing",
  "/about": "/about",
  "/dashboard": "/dashboard",
  "/pathnames": {
    en: "/en",
    de: "/de",
    fr: "/fr",
    pt: "/pt",
    es: "/es",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
