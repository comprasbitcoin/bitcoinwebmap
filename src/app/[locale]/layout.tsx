import clsx from "clsx";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import Navigation from "components/Menus/Navigation";
import { locales } from "../../config";
import { NextIntlClientProvider } from "next-intl";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: "ComprasBitcoin",
    description: "A Bitcoin Map",
    manifest: "/manifest.json",
    icons: {
      apple: "/icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <html className="h-full" lang={locale}>
        <body className={clsx(inter.className, "flex h-full flex-col")}>
          <Navigation />

          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
