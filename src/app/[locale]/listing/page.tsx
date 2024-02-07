import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import PageLayout2 from "components/PageLayout2";
import MenuListing from "components/Menus/MenuListing";
import VendorPage from "components/VendorPage";
import { getVendors } from "../../../../lib/vendors";
import VendorGrid from "components/VendorGrid";

type Props = {
  params: { locale: string; provider: string };
  vendors: any;
};

export default function ProvidersGrid({ params: { locale, provider } }: Props) {
  unstable_setRequestLocale(locale);
  const vendors = getVendors();

  const t = useTranslations("MapPage");

  return (
    <PageLayout2 title={t("title")}>
      <MenuListing />
      <VendorGrid vendors={vendors} />
    </PageLayout2>
  );
}
