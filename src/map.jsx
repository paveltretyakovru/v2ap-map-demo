import { MapContainer, TileLayer } from "react-leaflet";
import { Hexo } from "./hexo";

export const defaultZoom = 14;
export const deafultCenter = [53.195878, 50.100202];

export const Map = () => {
  return (
    <MapContainer
      style={{ height: "100%", width: "100%" }}
      center={deafultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Hexo />
    </MapContainer>
  );
};
