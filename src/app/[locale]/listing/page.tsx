import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import PageLayout2 from "components/PageLayout2";
import MenuListing from "components/MenuListing";

type Props = {
  params: { locale: string; provider: string };
};

export default function ProvidersGrid({ params: { locale, provider } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("MapPage");

  return (
    <PageLayout2 title={t("title")}>
      <MenuListing />
    </PageLayout2>
  );
}
