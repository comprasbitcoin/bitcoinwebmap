import dynamic from "next/dynamic";

const MapLeafletSsrOff = dynamic(() => import("components/MapLeaflet"), {
  ssr: false,
});

export default MapLeafletSsrOff;
