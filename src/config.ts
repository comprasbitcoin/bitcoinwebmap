import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "de", "fr", "pt", "es"] as const;

export const pathnames = {
  "/": "/",
  "/map": "/map",
  "/map/alojamiento": "/map/alojamiento",
  "/map/bienestar": "/map/bienestar",
  "/map/compras": "/map/compras",
  "/map/entretenimiento": "/map/entretenimiento",
  "/map/gastronomia": "/map/gastronomia",
  "/map/servicios": "/map/servicios",
  "/map/transporte": "/map/transporte",
  "/listing": "/listing",
  "/listing/alojamiento": "/listing/alojamiento",
  "/listing/bienestar": "/listing/bienestar",
  "/listing/compras": "/listing/compras",
  "/listing/entretenimiento": "/listing/entretenimiento",
  "/listing/gastronomia": "/listing/gastronomia",
  "/listing/servicios": "/listing/servicios",
  "/listing/transporte": "/listing/transporte",
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
