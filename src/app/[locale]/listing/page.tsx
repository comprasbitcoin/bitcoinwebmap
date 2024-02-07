import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import PageLayout2 from "components/PageLayout2";
import MenuListing from "components/MenuListing";
import VendorItem from "components/VendorItem";

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
      <VendorItem
        params={{
          vendortitle: provider,
          slug: provider,
          summary: provider,
          creator: provider,
          image: provider,
        }}
      />
    </PageLayout2>
  );
}
