import { Stage, Text } from "@createjs/easeljs/";
import { FONT_BASE } from "../utils/load-font";

/**
 * 创建文字画布。
 * @param label
 * @param fontSize
 * @param width
 * @param height
 */
export function createCanvas(
  label: string,
  fontSize: number,
  w: number,
  h: number
): HTMLCanvasElement {
  const canvas = document.createElement("canvas") as HTMLCanvasElement;
  canvas.setAttribute("width", w + "px");
  canvas.setAttribute("height", h + "px");

  const stage = new Stage(canvas);
  const text1 = new Text(label, fontSize + "px " + FONT_BASE, "#FFF");
  text1.textAlign = "center";
  text1.x = w / 2;
  stage.addChild(text1);
  stage.update();
  return canvas;
}
