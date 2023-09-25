import { atom, useAtom } from "jotai";

export const selectVectorLayerChecked = atom(false);

export const VectorMenu = () => {
  const [checked, setChecked] = useAtom(selectVectorLayerChecked);

  return (
    <div>
      <input
        type="checkbox"
        id="show-vector"
        name="show-vector"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <label htmlFor="show-vector">Show vector layer</label>
    </div>
  );
};
