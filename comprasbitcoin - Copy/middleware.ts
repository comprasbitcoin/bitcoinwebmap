import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["es", "en"],

  defaultLocale: "es",
});

export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req);
  },

  // Ensure that locale specific sign-in pages are public
  publicRoutes: [
    "/",
    "/es",
    "/en",
    "/:locale/sign-in",
    "/about",
    "/sign-in",
    "/sign-up",
    "/es/about",
    "/es/sign-in",
    "/es/sign-up",
    "/en/about",
    "/en/sign-in",
    "/en/sign-up",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/es|en", "/(api|trpc)(.*)"],
};

/* import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { authMiddleware } from "@clerk/nextjs";

// Internationalization Middleware
const intlMiddleware = createMiddleware({
  locales: ["es", "en"],
  defaultLocale: "es",
});

// Clerk Middleware
const clerkMiddleware = authMiddleware({});

export function middleware(request) {
  // Apply Internationalization middleware
  const intlResponse = intlMiddleware(request);
  if (intlResponse) return intlResponse;

  // Apply Clerk middleware
  const clerkResponse = clerkMiddleware(request);
  if (clerkResponse) return clerkResponse;

  // Continue to the page or API route
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/(es|en)/:path*",
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
 */
