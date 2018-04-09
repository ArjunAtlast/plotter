import { Graphic } from "./graphic";
import { Canvas } from "./canvas";
export declare class Vertex {
    x: number;
    y: number;
    radius: number;
    private _graphic;
    /**
      Creates a new Vertex
      @constructor
      @param {number} x - X Coordinate
      @param {number} y - Y Coordinate
      @param {number} radius - Radius of the vertex when plotted
    */
    constructor(x: number, y: number, radius: number, graphic?: Graphic);
    /**
      Set vertex style for plotting
      @function
      @param {Graphic} graphic - Graphic object to style the vertex
    */
    style(graphic: Graphic): void;
    /**
      Plot vertex to canvas
      @function
      @param {Canvas} canvas
    */
    plot(canvas: Canvas): void;
    /**
      Generate SVG Circle Element for the vertex
      @function
      @return {SVGCircleElement}
    */
    private genSVG();
}
