import { atom, useAtom } from "jotai";
import level1 from "./data/clusters_level_1.json";
import level2 from "./data/clusters_level_2.json";
import level3 from "./data/clusters_level_3.json";
import level4 from "./data/clusters_level_4.json";
import level5 from "./data/clusters_level_5.json";

export const rsuRadiusConfig = [
  {
    id: 0,
    label: "Null",
    data: {
      type: "FeatureCollection",
      features: [],
    },
  },
  {
    id: 1,
    label: "Level 1",
    data: level1,
  },
  {
    id: 2,
    label: "Level 2",
    data: level2,
  },
  {
    id: 3,
    label: "Level 3",
    data: level3,
  },
  {
    id: 4,
    label: "Level 4",
    data: level4,
  },
  {
    id: 5,
    label: "Level 5",
    data: level5,
  },
];

export const selectedRsuRadiusAtom = atom(1);

export const RsuRadiusMenu = () => {
  const [selectValue, setSelectValue] = useAtom(selectedRsuRadiusAtom);

  return (
    <>
      <div className="form__item">
        <div className="form__label">Rsu Radius</div>

        <select
          value={`${selectValue}`}
          onChange={(e) => {
            console.log(typeof e.target.value);
            setSelectValue(+e.target.value);
          }}
        >
          {rsuRadiusConfig.map((config) => (
            <option key={`rsu-radius-option-${config.id}`} value={config.id}>
              {config.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
