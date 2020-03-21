import { SvgContext } from "../types";

interface NoteHeadOptions {
  x: number;
  y: number;
}

export const drawNoteHead = (
  context: SvgContext,
  { x = 0, y = 0 }: Partial<NoteHeadOptions> = {}
) => {
  context.draw
    .ellipse(13, 9.5)
    .move(x, y)
    .rotate(160);
};
