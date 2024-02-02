"use client";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function ChangeView({ coords }: any) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function MapLeaflet({ children, title }: Props) {
  const t = useTranslations("PageLayout");
  const [geoData, setGeoData] = useState({
    lat: -34.5645369562744,
    lng: -58.44317823716325,
  });

  const center: [number, number] = [geoData.lat, geoData.lng];

  return (
    <div className="min-h-screen ">
      <MapContainer center={center} zoom={12} style={{ height: "80vh" }}>
        <TileLayer
          attribution={{
            innerHTML: {
              __html:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            },
          }}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ChangeView coords={center} />
      </MapContainer>
    </div>
  );
}
