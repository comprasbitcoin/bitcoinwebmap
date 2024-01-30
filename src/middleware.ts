import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "./config";

const publicPages = [
  "/",
  "/map",
  "/map/alojamiento",
  "/map/bienestar",
  "/map/compras",
  "/map/entretenimiento",
  "/map/gastronomia",
  "/map/servicios",
  "/map/transporte",
  "/listing",
  "/listing/alojamiento",
  "/listing/bienestar",
  "/listing/compras",
  "/listing/entretenimiento",
  "/listing/gastronomia",
  "/listing/servicios",
  "/listing/transporte",
  "/about",
  "/login",
  "/error",
  "/en",
  "/es",
  "/de",
  "/fr",
  "/pt",
];

// Intl middleware configuration
const intlMiddleware = createIntlMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
});

// Auth middleware configuration
const authMiddleware = withAuth((req) => intlMiddleware(req), {
  callbacks: {
    authorized: ({ token }) => token != null,
  },
  pages: {
    signIn: "/login",
  },
});

// Combined middleware
export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en|fr|pt|es)/:path*", "/((?!api|_next|.*\\..*).*)"],
};
