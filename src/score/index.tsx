import { SVG } from "@svgdotjs/svg.js";
import { drawStave } from "./stave";
import { drawTrebleClef } from "./clefs/trebleClef";
import { drawNoteHead, NoteHeadTypes } from "./notes/noteHead";
import { drawNoteStem, StemDirections } from "./notes/noteStem";
import { drawTimeSignatureNumber } from "./timeSignatures/timeSignatureNumber";

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

  drawTimeSignatureNumber(svgContext, { x: 42, y: 51, value: 4 });
  drawTimeSignatureNumber(svgContext, { x: 42, y: 71, value: 4 });

  drawNoteHead(svgContext, { x: 60, y: 60, type: NoteHeadTypes.Crotchet });
  drawNoteStem(svgContext, { x: 60.6, y: 65, direction: StemDirections.Down });

  drawNoteHead(svgContext, { x: 100, y: 65, type: NoteHeadTypes.Crotchet });
  drawNoteStem(svgContext, { x: 111.4, y: 70, direction: StemDirections.Up });

  drawNoteHead(svgContext, { x: 140, y: 70, type: NoteHeadTypes.Crotchet });
  drawNoteStem(svgContext, { x: 151.4, y: 75, direction: StemDirections.Up });

  drawNoteHead(svgContext, { x: 180, y: 70, type: NoteHeadTypes.Minim });
  drawNoteStem(svgContext, { x: 191.4, y: 75, direction: StemDirections.Up });

  drawNoteHead(svgContext, { x: 220, y: 70, type: NoteHeadTypes.SemiBreve });

  drawNoteHead(svgContext, { x: 260, y: 50, type: NoteHeadTypes.Minim });
  drawNoteStem(svgContext, { x: 260.6, y: 55, direction: StemDirections.Down });
};

export default Draw;
