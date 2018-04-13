import { Graphic } from "./graphic";
import { Canvas } from "./canvas";
import { Edge } from "./edge";
import { setElementAttributes, precisionRound } from "../helpers/utility";

export class Vertex {

  x: number;
  y: number;
  radius: number;
  private _graphic: Graphic;
  private svg?: SVGCircleElement;
  private links: any[] = [];
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
  Re render the vertex
  @function
  */
  rePaint() {
    if(this.svg) {
      setElementAttributes(this.svg, {
        "cx": this.x.toString(),
        "cy": this.y.toString(),
        "r": this.radius.toString(),
        "fill": this._graphic.fill,
        "stroke": this._graphic.stroke,
        "stroke-width": this._graphic.strokeWidth.toString()
      });
      for(let obj of this.links) {
        try {
          obj.rePaint();
        }
        catch(e) {
          console.error("Cannot call rePaint() method of linked object"+obj)
        }
      }
    }
  }

  /**
  Remove the vertex from canvas
  @function
  */
  remove() {
    if(this.svg) {
      this.svg.remove();
    }
    for(let obj of this.links) {
      try {
        obj.remove();
      }
      catch(e) {
        console.error("Cannot call remove() method of linked object"+obj);
      }
    }
  }

  /**
  Link Items to the vertex
  @function
  */
  link(obj:any) {
      this.links.push(obj);
  }

  linkMultiple(objs:any[]) {
    for(let obj of objs) {
      this.link(obj);
    }
  }

  /**
  Remove an item link
  @function
  */
  unlink(obj:any) {
    this.links = this.links.filter((lnk:any) => {
      if(lnk === obj) return false;
      return true;
    });
  }

  unlinkMultiple(objs:any[]) {
    this.links = this.links.filter((lnk:any) => {
      if(objs.indexOf(lnk)!=-1) return false;
      return true;
    });
  }

  unlinkAll() {
    this.links = [];
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

    return precisionRound(Math.atan2(yd, xd),5);
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

  /**
  Rotate the vertex based on an axis
  @function
  @param {Vertex} axis - Axis point of rotation
  @param {number} angle - Angle in radians
  */
  rotate(axis:Vertex, angle:number) {
    let a = axis.angleTo(this);
    let an = (angle+a)%(2*Math.PI);
    let d = axis.distanceFrom(this);
    let v = axis.vertexAt(an,d,0);
    this.x = v.x;
    this.y = v.y;
  }

}
