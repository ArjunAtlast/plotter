import { Vertex } from "./vertex";
import { Graphic } from "./graphic";
import { Canvas } from "./canvas";
export declare class Edge {
    start: Vertex;
    end: Vertex;
    private _graphic;
    private svg?;
    /**
      Creates a new Edge
      @constructor
      @param {Vertex} start - X Coordinate
      @param {Vertex} y - Y Coordinate
      @param {Graphic} radius - Radius of the vertex when plotted
    */
    constructor(start: Vertex, end: Vertex, graphic?: Graphic);
    readonly graphic: Graphic;
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
    Re render the edge
    @function
    */
    rePaint(): void;
    /**
    Remove the edge from canvas
    @function
    */
    remove(): void;
    /**
      Generate SVG Circle Element for the vertex
      @function
      @return {SVG}
    */
    private genSVG();
}
