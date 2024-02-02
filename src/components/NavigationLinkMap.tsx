"use client";

import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import type { AppPathnames } from "../config";
import { Link } from "../navigation";

export default function NavigationLinkMap<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;
  console.log({ selectedLayoutSegment });

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-2 py-3 transition-colors",
        isActive ? "text-white" : "text-gray-800 hover:text-gray-200"
      )}
      href={href}
      {...rest}
    />
  );
}
