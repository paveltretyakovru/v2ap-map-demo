import { useEffect, useRef, useState } from "react";
import { GeoJSON, useMap } from "react-leaflet";

import filterGeoJSON from "./data/filter.json";
import fullGeoJSON from "./data/full.json";

import "./hexo.scss";

const configs = [
  {
    id: 1,
    label: "Null",
    data: {
      type: "FeatureCollection",
      features: [],
    },
  },
  {
    id: 2,
    label: "Filter",
    data: filterGeoJSON,
  },
  {
    id: 3,
    label: "same_date.all",
    data: fullGeoJSON.hexagons.same_date.all,
  },
  {
    id: 4,
    label: "same_date.quarter",
    data: fullGeoJSON.hexagons.same_date.quarter,
  },
  {
    id: 5,
    label: "same_date.season",
    data: fullGeoJSON.hexagons.same_date.season,
  },
  {
    id: 6,
    label: "same_date.month",
    data: fullGeoJSON.hexagons.same_date.month,
  },
  {
    id: 7,
    label: "same_date.day",
    data: fullGeoJSON.hexagons.same_date.day,
  },
  {
    id: 8,
    label: "same_date.times_of_day",
    data: fullGeoJSON.hexagons.same_date.times_of_day,
  },

  // Same date and weather
  {
    id: 9,
    label: "same_date_and_weather.all",
    data: fullGeoJSON.hexagons.same_date_and_weather.all,
  },
  {
    id: 10,
    label: "same_date_and_weather.quarter",
    data: fullGeoJSON.hexagons.same_date_and_weather.quarter,
  },
  {
    id: 11,
    label: "same_date_and_weather.season",
    data: fullGeoJSON.hexagons.same_date_and_weather.season,
  },
  {
    id: 12,
    label: "same_date_and_weather.month",
    data: fullGeoJSON.hexagons.same_date_and_weather.month,
  },
  {
    id: 13,
    label: "same_date_and_weather.day",
    data: fullGeoJSON.hexagons.same_date_and_weather.day,
  },
  {
    id: 14,
    label: "same_date_and_weather.times_of_day",
    data: fullGeoJSON.hexagons.same_date_and_weather.times_of_day,
  },
];

export const Hexo = () => {
  const map = useMap();
  const geoJsonLayer = useRef(null);
  const [selectValue, setSelectValue] = useState(1);

  useEffect(() => {
    map.invalidateSize();
  }, []);

  useEffect(() => {
    console.log(configs.find((config) => config.id === selectValue)?.data);
    const data = configs.find((config) => config.id === selectValue).data;

    if (data && geoJsonLayer.current) {
      geoJsonLayer.current.clearLayers().addData(data);
    }
  }, [selectValue]);

  return (
    <>
      <select
        value={`${selectValue}`}
        onChange={(e) => {
          console.log(typeof e.target.value);
          setSelectValue(+e.target.value);
        }}
        className="hexo__select"
      >
        {configs.map((config) => (
          <option key={`hexo-option-${config.id}`} value={config.id}>
            {config.label}
          </option>
        ))}
      </select>

      {selectValue && (
        <GeoJSON ref={geoJsonLayer} />

        // <GeoJSON
        //   data={{ ...configs.find((config) => config.id === selectValue).data }}
        //   // style={{ color: '#000000', fillColor: 'white', weight: 1 }}
        // />
      )}
    </>
  );
};
