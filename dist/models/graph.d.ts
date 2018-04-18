import { Vertex } from './vertex';
import { Edge } from './edge';
import { Canvas } from './canvas';
import { Plottable } from "../interfaces/plottable";
import { Graphic } from './graphic';
export declare class Graph implements Plottable {
    vertices: Vertex[];
    edges: Edge[];
    /**
      Creates a new Graph
      @constructor
      @param {Vertex[]} vertices - X Coordinate
      @param {Edge[]} edges - Y Coordinate
    */
    constructor(vertices: Vertex[], edges: Edge[]);
    centroid(): Vertex;
    /**
      Plot vertex to canvas
      @function
      @param {Canvas} canvas
    */
    plot(canvas: Canvas): void;
    /**
    Re render the graph
    @function
    */
    rePaint(): void;
    /**
    Remove graph from canvas
    @function
    */
    remove(): void;
    /**
    Create a copy of the graph
    @function
    @return {Graph}
    */
    copy(): Graph;
    /**
    Rotate graph based on an axis
    @function
    @param {Vertex} axis - Axis point of rotation
    @param {number} angle - Angle in radians
    */
    rotate(angle: number, axis?: Vertex): void;
    /**
    Translate graph by the given distance in x and y axis
    @function
    @param {number} x - Axis point of rotation
    @param {number} y - Angle in radians
    */
    translate(x: number, y: number): void;
    /**
    Scale the graph using the axis and ratio given
    @function
    @param {Vertex} axis - Axis point of Scale
    @param {number} ratio
    */
    scale(ratio: number, axis?: Vertex): void;
    /**
    Join the graph with another graph by connecting corresponding vertices
    @param {Graph} graph
    @param {Graphic} edge_graphic
    @return {Graph}
    */
    join(graph: Graph, edge_graphic?: Graphic): Graph | null;
    /**
    Union the graph with another graph
    @param {Graph} graph
    @return {Graph}
    */
    union(graph: Graph): Graph;
    /**
    Intersect the graph with another graph
    @param {Graph} graph
    @return {Graph}
    */
    intersection(graph: Graph): Graph;
    /**
    Subtract the graph with another graph
    @param {Graph} graph
    @return {Graph}
    */
    subtract(graph: Graph): Graph;
}
