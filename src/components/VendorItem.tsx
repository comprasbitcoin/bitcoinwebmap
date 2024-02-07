import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../navigation";

type Props = {
  params: {
    id: number;
    vendor: string;
    slug: string;
    summary: string;
    creator: string;
    image: string;
  };
};

export default function VendorItem({
  params: { vendor, slug, summary, creator, image },
}: Props) {
  const t = useTranslations("VendorItem");

  return (
    <article className="flex flex-col justify-between h-full rounded-4 shadow-md overflow-hidden transition-all duration-300 ease-in-out text-#ddd6cb bg-gradient-to-r from-#2c1e19 to-#25200f">
      <div className="flex flex-col items-center justify-center">
        <header className="w-full text-center">
          <div className="relative h-60">
            <Image src={image} alt={vendor} fill />
          </div>
          <div className="p-2 px-4 pt-0 pb-4">
            <h2>
              {t("vendortitle")}
              {title}
            </h2>
            <p>
              {t("by")} {t("creator")} {title}
            </p>
          </div>
        </header>
        <div className="w-full text-center">
          <p className="p-4 px-4 pt-0 pb-4">
            {t("summary")}
            {summary}
          </p>
          <div className="p-4 px-4 pt-0 pb-4">
            <Link href={`/meals/${slug}`}>View Details</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
