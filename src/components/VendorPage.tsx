import VendorGrid from "components/VendorGrid";
import { getVendors } from "../../lib/vendors";

type Props = {
  vendors: any;
};

export default async function VendorPage() {
  const vendors = await getVendors();

  return <VendorGrid vendors={vendors} />;
}
