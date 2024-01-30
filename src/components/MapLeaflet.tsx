"use client";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

export function ChangeView({ coords }) {
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

  const center = [geoData.lat, geoData.lng];

  return (
    <div className="min-h-screen ">
      <MapContainer center={center} zoom={12} style={{ height: "80vh" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ChangeView coords={center} />
      </MapContainer>
    </div>
  );
}
