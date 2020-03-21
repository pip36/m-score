import { SVG } from "@svgdotjs/svg.js";
import { drawStave } from "./stave";
import { drawTrebleClef } from "./clefs/trebleClef";
import { drawNoteHead } from "./notes/noteHead";

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
  drawNoteHead(svgContext, { x: 61, y: 60 });
  drawNoteHead(svgContext, { x: 100, y: 65 });
  drawNoteHead(svgContext, { x: 140, y: 70 });
};

export default Draw;
