import React from "react";
import { useTranslations } from "next-intl";

export const ShowError = ({ error }: { error?: string }) => {
  const t = useTranslations("LoginPage");
  if (!error) return;
  return <p>{t("error", { error })}</p>;
};
