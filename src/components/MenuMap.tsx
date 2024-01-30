import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";

export default function MenuMap() {
  const t = useTranslations("Menu");

  return (
    <div className="bg-orange-700">
      <nav className="container flex justify-between p-1 text-white">
        <div className="flex justify-center items-center">
          <NavigationLink href="/map/alojamiento">
            {t("alojamiento")}
          </NavigationLink>
          <NavigationLink href="/map/bienestar">
            {t("bienestar")}
          </NavigationLink>
          <NavigationLink href="/map/compras">{t("compras")}</NavigationLink>
          <NavigationLink href="/map/entretenimiento">
            {t("entretenimiento")}
          </NavigationLink>
          <NavigationLink href="/map/gastronomia">
            {t("gastronomia")}
          </NavigationLink>
          <NavigationLink href="/map/servicios">
            {t("servicios")}
          </NavigationLink>
          <NavigationLink href="/map/transporte">
            {t("transporte")}
          </NavigationLink>
        </div>
      </nav>
    </div>
  );
}
