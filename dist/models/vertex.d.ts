import { Graphic } from "./graphic";
export declare class Vertex {
    private _x;
    private _y;
    private _radius;
    private _graphic?;
    /**
    Creates a new Vertex
    @constructor
    @param {number} x - X Coordinate
    @param {number} y - Y Coordinate
    @param {number} radius - Radius of the vertex when plotted
    */
    constructor(x: number, y: number, radius: number);
    /**
    Set vertex style for plotting
    @function
    @param {Graphic} graphic - Graphic object to style the vertex
    */
    style(graphic: Graphic): void;
    readonly x: number;
    readonly y: number;
    readonly radius: number;
}
