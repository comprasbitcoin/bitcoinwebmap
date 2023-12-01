import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { notFound } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const locales = ["es", "en"];

export const metadata: Metadata = {
  title: "ComprasBitcoin",
  description: "A Bitcoin Map",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: any };
}) {
  const { locale } = params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  return (
    <ClerkProvider>
      <html lang={locale}>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
