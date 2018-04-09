import { Vertex } from './vertex';
import { Edge } from './edge';
import { Canvas } from './canvas';

export class Graph {
  vertices: Vertex[];
  edges: Edge[];

  /**
    Creates a new Graph
    @constructor
    @param {Vertex[]} vertices - X Coordinate
    @param {Edge[]} edges - Y Coordinate
  */
  constructor(vertices:Vertex[], edges:Edge[]) {
    this.vertices = vertices;
    this.edges = edges;
  }

  /**
    Plot vertex to canvas
    @function
    @param {Canvas} canvas
  */
  plot(canvas: Canvas) {
    for(var e of this.edges) {
      e.plot(canvas);
    }
    for(var v of this.vertices) {
      v.plot(canvas);
    }
  }
}
