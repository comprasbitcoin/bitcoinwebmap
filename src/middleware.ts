import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "./config";

const publicPages = [
  "/",
  "/map",
  "/listing",
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
