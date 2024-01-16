import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className="bg-orange-700">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/map">{t("map")}</NavigationLink>
          <NavigationLink href="/listing">{t("listing")}</NavigationLink>
          <NavigationLink href="/about">{t("about")}</NavigationLink>
          <NavigationLink href="/dashboard">{t("dashboard")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
