import { useTranslations } from "next-intl";

import VendorItem from "./VendorItem";
interface Vendor {
  id: number;
  vendor: string;
  slug: string;
  summary: string;
  creator: string;
  image: string;
}
type Props = {
  params: {
    vendors: Vendor[];
  };
};

export default function VendorGrid({
  params: { vendors } = { vendors: [] },
}: Props) {
  const t = useTranslations("VendorGrid");

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {vendors.map((vendors) => (
        <li key={vendors.id}>
          <VendorItem params={vendors} />
        </li>
      ))}
    </ul>
  );
}
