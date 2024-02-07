import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function PageLayout2({ children }: Props) {
  const t = useTranslations("PageLayout");

  return (
    <div className="relative flex grow flex-col bg-orange-600 ">
      <div className="absolute inset-0 overflow-hidden"></div>
      <div className="relative flex grow flex-col px-4">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-3xl"></h1>
        <div className="min-h-screen mt-0 text-gray-800 md:text-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
