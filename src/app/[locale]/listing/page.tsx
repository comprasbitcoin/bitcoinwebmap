import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import PageLayout2 from "components/PageLayout2";
import MenuListing from "components/Menus/MenuListing";
import VendorGrid from "components/VendorGrid";

type Props = {
  params: { locale: string; provider: string };
};

export default function ProvidersGrid({ params: { locale, provider } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("MapPage");

  return (
    <PageLayout2>
      <MenuListing />
      <VendorGrid />
    </PageLayout2>
  );
}
