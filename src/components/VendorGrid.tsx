import { useTranslations } from "next-intl";

import VendorItem from "./VendorItem";
interface Vendor {
  id: string;
  // other properties of Vendor
}
type Props = {
  params: {
    vendor: Vendor[];
  };
};

export default function VendorGrid({ params: { vendor } }: Props) {
  const t = useTranslations("VendorGrid");

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {vendor.map((vendor) => (
        <li key={vendor.id}>
          <VendorItem params={vendor} />
        </li>
      ))}
    </ul>
  );
}
