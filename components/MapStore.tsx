"use client"; // MOLTO importante

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

// Fix icone leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

export function MapStore() {
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <MapContainer
      center={[40.90455, 14.39552]}
      zoom={20}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[40.90455, 14.39552]}>
        <Popup>
          Qui si trova il nostro store a Via Trieste 92, Pomigliano d'Arco!
        </Popup>
      </Marker>
    </MapContainer>
  );
}
