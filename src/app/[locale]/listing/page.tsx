import PageLayout2 from "components/PageLayout2";
import MenuListing from "components/Menus/MenuListing";
import { getVendors } from "../../../../lib/vendors";
import VendorGrid from "components/VendorGrid";

type Props = {
  params: { provider: string };
  vendor: any;
};

export default async function ProvidersGrid({ params: { provider } }: Props) {
  const vendor = await getVendors();

  return (
    <PageLayout2>
      <MenuListing />
      <VendorGrid />
    </PageLayout2>
  );
}
