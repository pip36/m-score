import { SvgContext } from "../types";

export enum NoteHeadTypes {
  Crotchet = "CROTCHET",
  Minim = "MINIM",
  SemiBreve = "SEMIBREVE"
}

interface NoteHeadOptions {
  x: number;
  y: number;
  type: NoteHeadTypes;
}

export const drawNoteHead = (
  context: SvgContext,
  options: Partial<NoteHeadOptions> = {}
) => {
  switch (options.type) {
    case NoteHeadTypes.Crotchet:
      drawCrotchet(context, options);
      break;
    case NoteHeadTypes.Minim:
      drawMinim(context, options);
      break;
    case NoteHeadTypes.SemiBreve:
      drawSemiBreve(context, options);
      break;
    default:
      throw new Error("Must provide a type option to notehead.");
  }
};

const drawCrotchet = (
  context: SvgContext,
  { x = 0, y = 0 }: Partial<NoteHeadOptions> = {}
) => {
  context.draw
    .ellipse(13, 9.5)
    .move(x, y)
    .rotate(150);
};

const drawMinim = (
  context: SvgContext,
  { x = 0, y = 0 }: Partial<NoteHeadOptions> = {}
) => {
  context.draw
    .ellipse(13, 9.5)
    .move(x, y)
    .rotate(150);

  context.draw
    .ellipse(11, 4.5)
    .fill("white")
    .move(x + 1, y + 2.5)
    .rotate(150);
};

export const drawSemiBreve = (
  context: SvgContext,
  { x = 0, y = 0 }: Partial<NoteHeadOptions> = {}
) => {
  context.draw.ellipse(13, 9.5).move(x, y);

  context.draw
    .ellipse(8.5, 4.5)
    .fill("white")
    .move(x + 2.2, y + 2.5)
    .rotate(70);
};
