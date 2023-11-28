import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="/es" locale="es">
          En Español
        </Link>{" "}
        <Link href="/en" locale="en">
          In English{" "}
        </Link>{" "}
        <br />
        <br />
      </div>{" "}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>{t("title")}</h1>
      </div>
    </main>
  );
}
