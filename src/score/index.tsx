import { SVG } from "@svgdotjs/svg.js";
import { drawStave } from "./stave";
import { drawTrebleClef } from "./clefs/trebleClef";
import { drawNoteHead, NoteHeadTypes } from "./notes/noteHead";

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
  drawNoteHead(svgContext, { x: 60, y: 60, type: NoteHeadTypes.Crotchet });
  drawNoteHead(svgContext, { x: 100, y: 65, type: NoteHeadTypes.Crotchet });
  drawNoteHead(svgContext, { x: 140, y: 70, type: NoteHeadTypes.Crotchet });
  drawNoteHead(svgContext, { x: 180, y: 70, type: NoteHeadTypes.Minim });
  drawNoteHead(svgContext, { x: 220, y: 70, type: NoteHeadTypes.SemiBreve });
};

export default Draw;
