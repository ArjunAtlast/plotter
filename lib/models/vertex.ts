import { Graphic } from "./graphic";
import { Canvas } from "./canvas";
import { setElementAttributes, precisionRound } from "../helpers/utility";

export class Vertex {

  x: number;
  y: number;
  radius: number;
  private _graphic: Graphic;
  private svg?: SVGCircleElement;
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
    this.svg = v;
    return v;
  }

  /**
  Calculate angle of a vertex from this vertex
  @function
  @param {Vertex} v - Attributes object
  @return {number}
  */

  angleTo(v: Vertex): number {
    var xd = v.x - this.x;
    var yd = v.y - this.y;
    var dist = this.distanceFrom(v);

    //if distance is 0 then angle is 0
    if(dist == 0) return 0;

    var rads = Math.acos(xd/dist);
    return (yd >= 0)? precisionRound(rads,5) : precisionRound(Math.PI + rads,5);
  }

  /**
  Calculate distance between vertices
  @function
  @param {Vertex} v - Attributes object
  @return {number}
  */
  distanceFrom(v: Vertex): number {
    let xd = this.x - v.x;
    let yd = this.y - v.y;
    return precisionRound(Math.sqrt(xd*xd+yd*yd),5);
  }

  /**
  Create vertex at an angle and distance from this vertex
  @function
  @param {number} angle - Angle in radians
  @param {number} distance - Distance
  @param {number} radius - Radius of
  @param {Graphic} [graphic]
  @return {Vertex}
  */
  vertexAt(angle: number, distance: number, radius: number, graphic?:Graphic): Vertex {
    var x = precisionRound(this.x + distance*Math.cos(angle),5);
    var y = precisionRound(this.y + distance*Math.sin(angle),5);
    var v = new Vertex(x,y,radius,graphic);

    return v;
  }

}
