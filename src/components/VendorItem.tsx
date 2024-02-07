import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
type Props = {
  params: {
    vendortitle: string;
    slug: string;
    summary: string;
    creator: string;
    image: string;
  };
};

export default function VendorItem({
  params: { vendortitle, slug, summary, creator, image },
}: Props) {
  // Enable static rendering

  const t = useTranslations("VendorItem");

  return (
    <article className="flex flex-col justify-between h-full rounded-4 shadow-md overflow-hidden transition-all duration-300 ease-in-out text-#ddd6cb bg-gradient-to-r from-#2c1e19 to-#25200f">
      <div className="flex flex-col items-center justify-center">
        <header className="w-full text-center">
          <div className="relative h-60">
            <Image src={image} alt={vendortitle} fill />
          </div>
          <div className="p-2 px-4 pt-0 pb-4">
            <h2>{t("vendortitle")}</h2>
            <p>
              {t("by")} {t("creator")}
            </p>
          </div>
        </header>
        <div className="w-full text-center">
          <p className="p-4 px-4 pt-0 pb-4">{t("summary")}</p>
        </div>
      </div>
    </article>
  );
}
