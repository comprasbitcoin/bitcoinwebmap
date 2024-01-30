import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";

export default function MenuListing() {
  const t = useTranslations("Menu");

  return (
    <div className="bg-orange-700">
      <nav className="container flex justify-between p-1 text-white">
        <div className="flex justify-center items-center">
          <NavigationLink href="/listing/alojamiento">
            {t("alojamiento")}
          </NavigationLink>
          <NavigationLink href="/listing/bienestar">
            {t("bienestar")}
          </NavigationLink>
          <NavigationLink href="/listing/compras">
            {t("compras")}
          </NavigationLink>
          <NavigationLink href="/listing/entretenimiento">
            {t("entretenimiento")}
          </NavigationLink>
          <NavigationLink href="/listing/gastronomia">
            {t("gastronomia")}
          </NavigationLink>
          <NavigationLink href="/listing/servicios">
            {t("servicios")}
          </NavigationLink>
          <NavigationLink href="/listing/transporte">
            {t("transporte")}
          </NavigationLink>
        </div>
      </nav>
    </div>
  );
}
