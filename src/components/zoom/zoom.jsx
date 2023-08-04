import { useState } from "react";
import { useMap, useMapEvent } from "react-leaflet";
import "./zoom.scss";

export const Zoom = () => {
  const [zoom, setZoom] = useState();
  const map = useMap();

  useMapEvent("zoom", () => {
    setZoom(map.getZoom());
  });

  return (
    <div className="zoom">
      <p>Zoom</p>
      <span>{zoom}</span>
    </div>
  );
};
