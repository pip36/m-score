import { SvgContext } from "../types";
import * as numbers from "./numberSvgPaths";

interface TimeSignatureNumberOptions {
  value: number;
  x: number;
  y: number;
}

export const drawTimeSignatureNumber = (
  context: SvgContext,
  { value, x = 0, y = 0 }: Partial<TimeSignatureNumberOptions> = {}
) => {
  switch (value) {
    case 3:
      context.draw
        .path(numbers.THREE)
        .stroke({ color: "black", width: 0.1 })
        .move(x + 1, y);
      break;
    case 4:
      context.draw
        .path(numbers.FOUR)
        .stroke({ color: "black", width: 0.1 })
        .move(x, y);
      break;
    default:
      throw new Error("TimeSignatureValue requires a valid 'value'");
  }
};
