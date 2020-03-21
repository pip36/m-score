import { SVG } from "@svgdotjs/svg.js";

const Draw = () => {
  const draw = SVG()
    .addTo("#score")
    .size(300, 300);

  draw.rect(300, 1).attr({ x: 0, y: 0 });
  draw.rect(300, 1).attr({ x: 0, y: 10 });
  draw.rect(300, 1).attr({ x: 0, y: 20 });
  draw.rect(300, 1).attr({ x: 0, y: 30 });
  draw.rect(300, 1).attr({ x: 0, y: 40 });
};

export default Draw;
