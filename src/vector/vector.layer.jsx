import { useEffect } from "react";
import vectorTileLayer from "leaflet-vector-tile-layer";
import { useMap } from "react-leaflet";

// const url = "http://localhost:8081/styles/basic-preview/{z}/{x}/{y}.png";
const url = "http://localhost:8081/data/v3/{z}/{x}/{y}.pbf";

export const VectorLayer = () => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      const tileLayer = vectorTileLayer(url, {
        vectorTileLayerStyles: {
          landuse: {
            weight: 1,
            fillColor: "#dd0000",
            fillOpacity: 1,
            fill: true,
            filter: ["==", "class", "wood"],
          },
        },
      });

      map.addLayer(tileLayer);
    }
  }, [map]);

  return null;
};
