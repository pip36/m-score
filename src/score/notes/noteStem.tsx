import { SvgContext } from "../types";

export enum StemDirections {
  Up = "UP",
  Down = "Down"
}

interface NoteStemOptions {
  x: number;
  y: number;
  length: number;
  direction: StemDirections;
}

export const drawNoteStem = (
  context: SvgContext,
  {
    x = 0,
    y = 0,
    length = 35,
    direction = StemDirections.Up
  }: Partial<NoteStemOptions> = {}
) => {
  const positionY = direction === StemDirections.Up ? y - length : y;
  context.draw.rect(1, length).move(x, positionY);
};
