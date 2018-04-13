import { Graphic } from "./graphic";
import { Canvas } from "./canvas";
export declare class Vertex {
    x: number;
    y: number;
    radius: number;
    private _graphic;
    private svg?;
    private links;
    /**
      Creates a new Vertex
      @constructor
      @param {number} x - X Coordinate
      @param {number} y - Y Coordinate
      @param {number} radius - Radius of the vertex when plotted
    */
    constructor(x: number, y: number, radius: number, graphic?: Graphic);
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
    Re render the vertex
    @function
    */
    rePaint(): void;
    /**
    Remove the vertex from canvas
    @function
    */
    remove(): void;
    /**
    Link Items to the vertex
    @function
    */
    link(obj: any): void;
    linkMultiple(objs: any[]): void;
    /**
    Remove an item link
    @function
    */
    unlink(obj: any): void;
    unlinkMultiple(objs: any[]): void;
    unlinkAll(): void;
    /**
      Generate SVG Circle Element for the vertex
      @function
      @return {SVGCircleElement}
    */
    private genSVG();
    /**
    Calculate angle of a vertex from this vertex
    @function
    @param {Vertex} v - Attributes object
    @return {number}
    */
    angleTo(v: Vertex): number;
    /**
    Calculate distance between vertices
    @function
    @param {Vertex} v - Attributes object
    @return {number}
    */
    distanceFrom(v: Vertex): number;
    /**
    Create vertex at an angle and distance from this vertex
    @function
    @param {number} angle - Angle in radians
    @param {number} distance - Distance
    @param {number} radius - Radius of
    @param {Graphic} [graphic]
    @return {Vertex}
    */
    vertexAt(angle: number, distance: number, radius: number, graphic?: Graphic): Vertex;
    /**
    Rotate the vertex based on an axis
    @function
    @param {Vertex} axis - Axis point of rotation
    @param {number} angle - Angle in radians
    */
    rotate(axis: Vertex, angle: number): void;
}
