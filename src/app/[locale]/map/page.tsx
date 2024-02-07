import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import PageLayout2 from "components/PageLayout2";
import MenuMap from "components/Menus/MenuMap";
import MapLeafletSsrOff from "components/MapLeafletSsrOff";
import { title } from "process";

type Props = {
  params: { locale: string };
};

export default function Map({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("MapPage");

  return (
    <PageLayout2 title={t("title")}>
      <MenuMap />
      <MapLeafletSsrOff title={title} />
    </PageLayout2>
  );
}
