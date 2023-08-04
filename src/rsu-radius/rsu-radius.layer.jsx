import { useEffect, useRef } from "react";
import { GeoJSON, useMap } from "react-leaflet";

import { rsuRadiusConfig, selectedRsuRadiusAtom } from "./rsu-radius.menu";
import { useAtom } from "jotai";

export const RsuRadiusLayer = () => {
  const map = useMap();
  const geoJsonLayer = useRef(null);
  const [selectedRsuRadius] = useAtom(selectedRsuRadiusAtom);

  useEffect(() => {
    const data = rsuRadiusConfig.find(
      (config) => config.id === selectedRsuRadius
    ).data;

    if (data && geoJsonLayer.current) {
      geoJsonLayer.current.clearLayers().addData(data);
    }

    if (selectedRsuRadius) {
      map.flyTo([59.90042363699969, 30.399102391302776], 15);
    }
  }, [selectedRsuRadius]);

  return <GeoJSON ref={geoJsonLayer} />;
};
