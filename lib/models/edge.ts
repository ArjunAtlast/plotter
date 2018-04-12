import { Vertex } from "./vertex";
import { Graphic } from "./graphic";
import { Canvas } from "./canvas";
import { setElementAttributes } from "../helpers/utility";

export class Edge {
  start: Vertex;
  end: Vertex;
  private _graphic: Graphic;
  private svg?: SVGLineElement;

  /**
    Creates a new Edge
    @constructor
    @param {Vertex} start - X Coordinate
    @param {Vertex} y - Y Coordinate
    @param {Graphic} radius - Radius of the vertex when plotted
  */
  constructor(start: Vertex, end: Vertex, graphic?: Graphic) {
    this.start = start;
    this.end = end;
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
    @return {SVG}
  */
  private genSVG():SVGLineElement {
    let v = <SVGLineElement>document.createElementNS("http://www.w3.org/2000/svg","line");
    //v.setAttribute("cx",this._x.toString());
    setElementAttributes(v, {
      "x1": this.start.x.toString(),
      "y1": this.start.y.toString(),
      "x2": this.end.x.toString(),
      "y2": this.end.y.toString(),
      "fill": this._graphic.fill,
      "stroke": this._graphic.stroke,
      "stroke-width": this._graphic.strokeWidth.toString()
    });
    this.svg = v;
    return v;
  }
}
