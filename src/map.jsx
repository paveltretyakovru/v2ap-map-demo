import { MapContainer, TileLayer } from "react-leaflet";
import { HexoLayer } from "./hexo/hexo.layer";
import { RsuRadiusLayer } from "./rsu-radius/rsu-radius.layer";
import { Zoom } from "./components/zoom/zoom";

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
      <HexoLayer />
      <RsuRadiusLayer />
      <Zoom />
    </MapContainer>
  );
};
