import { useLocale, useTranslations } from "next-intl";
import PageLayout from "components/PageLayout";
import { LoginForm } from "./components/loginForm";

export default function Login() {
  const locale = useLocale();
  const t = useTranslations("LoginPage");

  return (
    <PageLayout title={t("title")}>
      <LoginForm
        locale={locale}
        usernamelabel={t("username")}
        passwordlabel={t("password")}
        submitlabel={t("submit")}
        errorlabel={t("errorSimple")}
      ></LoginForm>
    </PageLayout>
  );
}
