import { Graphic } from "./graphic";
import { Canvas } from "./canvas";
import { setElementAttributes } from "../helpers/utility";

export class Vertex {

  x: number;
  y: number;
  radius: number;
  private _graphic: Graphic;
  /**
    Creates a new Vertex
    @constructor
    @param {number} x - X Coordinate
    @param {number} y - Y Coordinate
    @param {number} radius - Radius of the vertex when plotted
  */
  constructor(x: number, y:number, radius:number, graphic?: Graphic) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this._graphic = graphic?graphic:new Graphic("#B3B3B3","#000000",0);
  }

  /**
    Set vertex style for plotting
    @function
    @param {Graphic} graphic - Graphic object to style the vertex
  */
  style(graphic:Graphic) {
    this._graphic = graphic;
  }

  /**
    Plot vertex to canvas
    @function
    @param {Canvas} canvas
  */
  plot(canvas: Canvas) {
    let v = this.genSVG();
    canvas.add(v);
  }

  /**
    Generate SVG Circle Element for the vertex
    @function
    @return {SVGCircleElement}
  */
  private genSVG():SVGCircleElement {
    let v = <SVGCircleElement>document.createElementNS("http://www.w3.org/2000/svg","circle");
    //v.setAttribute("cx",this._x.toString());
    setElementAttributes(v, {
      "cx": this.x.toString(),
      "cy": this.y.toString(),
      "r": this.radius.toString(),
      "fill": this._graphic.fill,
      "stroke": this._graphic.stroke,
      "stroke-width": this._graphic.strokeWidth.toString()
    });
    return v;
  }

}
