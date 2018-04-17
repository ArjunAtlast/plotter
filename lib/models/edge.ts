import { Vertex } from "./vertex";
import { Graphic, DEFAULT_STYLE } from "./graphic";
import { Canvas } from "./canvas";
import { Plottable } from "../interfaces/plottable";
import { setElementAttributes } from "../helpers/utility";

export class Edge implements Plottable {
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
    this._graphic = graphic?graphic:DEFAULT_STYLE;
  }

  get graphic(): Graphic {
    return this._graphic;
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
  Re render the edge
  @function
  */
  rePaint() {
    setElementAttributes(this.svg, {
      "x1": this.start.x.toString(),
      "y1": this.start.y.toString(),
      "x2": this.end.x.toString(),
      "y2": this.end.y.toString(),
      "fill": this._graphic.fill,
      "stroke": this._graphic.stroke,
      "stroke-width": this._graphic.strokeWidth.toString()
    });
  }

  /**
  Remove the edge from canvas
  @function
  */
  remove() {
    if(this.svg) {
      this.svg.remove();
    }
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
