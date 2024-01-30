import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import ExternalLink from "./ExternalLink";

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout2({ children, title }: Props) {
  const t = useTranslations("PageLayout");

  return (
    <div className="relative flex grow flex-col bg-orange-600 py-3">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-4 h-[20500px] w-[20500px] translate-x-[-47.5%] rounded-full bg-gradient-to-b from-orange-800 via-orange-900 to-orange-1000" />
      </div>
      <div className=" relative flex grow flex-col px-4">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-3xl"></h1>
        <div className="mt-1 text-gray-800 md:text-lg">{children}</div>
      </div>
    </div>
  );
}
