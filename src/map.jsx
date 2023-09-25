import { MapContainer, TileLayer } from "react-leaflet";
import { HexoLayer } from "./hexo/hexo.layer";
import { RsuRadiusLayer } from "./rsu-radius/rsu-radius.layer";
import { Zoom } from "./components/zoom/zoom";
import { VectorLayer } from "./vector/vector.layer";
import { useAtom } from "jotai";
import { selectVectorLayerChecked } from "./vector/vector.menu";

export const defaultZoom = 14;
// export const deafultCenter = [53.195878, 50.100202];
export const defaultCenter = [47.37034, 8.54553];

export const Map = () => {
  const [vectorLayerChecked] = useAtom(selectVectorLayerChecked);

  return (
    <MapContainer
      style={{ height: "100%", width: "100%" }}
      center={defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={true}
    >
      {(!vectorLayerChecked && (
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      )) || <VectorLayer />}
      <HexoLayer />
      <RsuRadiusLayer />
      <Zoom />
    </MapContainer>
  );
};
