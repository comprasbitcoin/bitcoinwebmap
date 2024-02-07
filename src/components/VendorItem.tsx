import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
type Props = {
  params: {
    locale: string;
    provider: string;
    title: string;
    slug: string;
    summary: string;
    creator: string;
    image: string;
  };
};

export default function VendorItem({
  params: { locale, provider, title, slug, summary, creator, image },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("VendorItem");

  return (
    <article className="flex flex-col justify-between h-full rounded-4 shadow-md overflow-hidden transition-all duration-300 ease-in-out text-#ddd6cb bg-gradient-to-r from-#2c1e19 to-#25200f">
      <header>
        <div className="relative h-60">
          <Image src={image} alt={title} fill />
        </div>
        <div className="p-2 px-4 pt-0 pb-4">
          <h2>{t("title")}</h2>
          <p>
            {t("by")} {t("creator")}
          </p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="p-4 px-4 pt-0 pb-4">{t("summary")}</p>
        <div className="p-4 text-right">
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
