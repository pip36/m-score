import { SVG } from "@svgdotjs/svg.js";
import { drawStave } from "./stave";
import { drawTrebleClef } from "./clefs/trebleClef";

const viewWidth = 500;
const viewHeight = 500;

const Draw = () => {
  const draw = SVG()
    .addTo("#score")
    .viewbox(0, 0, viewWidth, viewHeight);

  const svgContext = {
    width: viewWidth,
    height: viewHeight,
    draw
  };

  drawStave(svgContext);
  drawTrebleClef(svgContext);
};

export default Draw;
