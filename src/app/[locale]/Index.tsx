"use client";

import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import PageLayout from "components/PageLayout";
import { locales } from "../../config";

type Props = {
  session: Session | null;
  params: { locale: string };
};

export default function Index({ params: { locale }, session }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");

  function onLogoutClick() {
    signOut();
  }

  return (
    <PageLayout title={t("title")}>
      {session ? (
        <>
          <p>{t("loggedIn", { username: session.user?.name })}</p>
          <p>
            <Link href={locale + "/secret"}>{t("secret")}</Link>
          </p>
          <button onClick={onLogoutClick} type="button">
            {t("logout")}
          </button>
        </>
      ) : (
        <>
          <p>{t("loggedOut")}</p>
          <Link href={locale + "/login"}>{t("login")}</Link>
        </>
      )}
      <p className="max-w-[590px]">
        {t.rich("description", {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </p>
    </PageLayout>
  );
}

/*
import {notFound} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import PageLayout from 'components/PageLayout';
import {locales} from '../../config';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <PageLayout title={t('title')}>
      <p className="max-w-[590px]">
        {t.rich('description', {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })}
      </p>
    </PageLayout>
  );
}
*/
