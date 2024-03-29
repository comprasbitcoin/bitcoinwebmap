"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ShowError } from "components/ShowError";

export const LoginForm = ({
  locale,
  usernamelabel,
  passwordlabel,
  submitlabel,
  errorlabel,
}: {
  locale: string;
  usernamelabel: string;
  passwordlabel: string;
  submitlabel: string;
  errorlabel: string;
}) => {
  const [error, setError] = useState<string>();
  const router = useRouter();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (error) setError(undefined);

    const formData = new FormData(event.currentTarget);
    signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    }).then((result) => {
      if (result?.error) {
        setError(result.error);
      } else {
        router.push(`/${locale}`);
      }
    });
  }
  return (
    <form
      action="/api/auth/callback/credentials"
      method="post"
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: 300,
      }}
    >
      <label style={{ display: "flex" }}>
        <span style={{ display: "inline-block", flexGrow: 1, minWidth: 100 }}>
          {usernamelabel}
        </span>
        <input name="username" type="text" />
      </label>
      <label style={{ display: "flex" }}>
        <span style={{ display: "inline-block", flexGrow: 1, minWidth: 100 }}>
          {passwordlabel}
        </span>
        <input name="password" type="password" />
      </label>
      {error && <p>{errorlabel}</p>}
      {/* {error && <p>{t("error", { error })}</p>}  */}
      <button type="submit">{submitlabel}</button>
    </form>
  );
};
