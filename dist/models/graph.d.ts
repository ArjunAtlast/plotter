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
    /**
      Plot vertex to canvas
      @function
      @param {Canvas} canvas
    */
    plot(canvas: Canvas): void;
}
