import { useEffect, useRef } from "react";
import { GeoJSON, useMap } from "react-leaflet";
import { selectedHexoAtom, hexogonsConfig } from "./hexo.menu";
import { useAtom } from "jotai";

export const HexoLayer = () => {
  const map = useMap();
  const geoJsonLayer = useRef(null);
  const [selectedHexo] = useAtom(selectedHexoAtom);

  useEffect(() => {
    map.invalidateSize();
  }, []);

  useEffect(() => {
    const data = hexogonsConfig.find(
      (config) => config.id === selectedHexo
    ).data;

    if (data && geoJsonLayer.current) {
      geoJsonLayer.current.clearLayers().addData(data);
    }

    map.flyTo([53.5157740807228, 49.41333239143027], 13);
  }, [selectedHexo]);

  return (selectedHexo && <GeoJSON ref={geoJsonLayer} />) || null;
};
