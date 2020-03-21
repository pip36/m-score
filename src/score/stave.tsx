import { SvgContext } from "./types";

interface StaveOptions {
  lineThickness: number;
  lineSpacing: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
}

export const drawStave = (
  ctx: SvgContext,
  {
    lineThickness = 1,
    lineSpacing = 10,
    paddingLeft = 5,
    paddingRight = 5,
    paddingTop = 49
  }: Partial<StaveOptions> = {}
) => {
  [0, 1, 2, 3, 4].forEach(i => {
    const staveLength = ctx.width - paddingLeft - paddingRight;
    const staveHeight = (lineThickness + lineSpacing) * 4 + lineThickness;
    const yPosition = i * lineSpacing + paddingTop;

    ctx.draw
      .rect(staveLength, lineThickness)
      .attr({ x: paddingLeft, y: yPosition });
  });
};
