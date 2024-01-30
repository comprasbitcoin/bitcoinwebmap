import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import PageLayout2 from "components/PageLayout2";
import MenuListing from "components/MenuListing";

type Props = {
  params: { locale: string };
};

export default function Map({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("MapPage");

  return (
    <PageLayout2 title={t("title")}>
      <MenuListing />

      <div className="max-w-[490px]">
        {t.rich("description", {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </div>
    </PageLayout2>
  );
}
