import "./app.scss";
import { HexoMenu } from "./hexo/hexo.menu";
import { Map } from "./map";
import { RsuRadiusMenu } from "./rsu-radius/rsu-radius.menu";
import { VectorMenu } from "./vector/vector.menu";

export function App() {
  return (
    <div className="app container">
      <div className="sidebar">
        <HexoMenu />
        <RsuRadiusMenu />
        <VectorMenu />
      </div>

      <Map />
    </div>
  );
}
