import { Vertex } from './vertex';
import { Edge } from './edge';
import { Canvas } from './canvas';
export declare class Graph {
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
    Rotate graph based on an axis
    @function
    @param {Vertex} axis - Axis point of rotation
    @param {number} angle - Angle in radians
    */
    rotate(axis: Vertex, angle: number): void;
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
    intersect(graph: Graph): Graph;
    /**
    Subtract the graph with another graph
    @param {Graph} graph
    @return {Graph}
    */
    subtract(graph: Graph): Graph;
}
