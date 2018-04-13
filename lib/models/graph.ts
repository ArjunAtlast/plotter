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

  /**
  Re render the graph
  @function
  */
  rePaint() {
    for(var v of this.vertices) {
      v.rePaint();
    }
    for(var e of this.edges) {
      e.rePaint();
    }
  }

  /**
  Remove graph from canvas
  @function
  */
  remove() {
    for(var v of this.vertices) {
      v.unlinkAll();
      v.remove();
    }
    for(var e of this.edges) {
      e.remove();
    }
  }

  /**
  Union the graph with another graph
  @param {Graph} graph
  @return {Graph}
  */
  union(graph: Graph):Graph {
    let newGraph = new Graph(this.vertices, this.edges);
    for(let v of graph.vertices) {
      if(newGraph.vertices.indexOf(v)==-1) newGraph.vertices.push(v)
    }
    for(let e of graph.edges) {
      if(newGraph.edges.indexOf(e)==-1) newGraph.edges.push(e)
    }

    return newGraph;
  }

  /**
  Intersect the graph with another graph
  @param {Graph} graph
  @return {Graph}
  */
  intersect(graph: Graph):Graph {
    let newGraph = new Graph(this.vertices, this.edges);
    newGraph.vertices = this.vertices.filter((v: Vertex) => {
      if(graph.vertices.indexOf(v)!=-1) return true;
      return false;
    });
    newGraph.edges = this.edges.filter((e: Edge) => {
      if(graph.edges.indexOf(e)!=-1) return true;
      return false;
    });
    return newGraph;
  }

  /**
  Subtract the graph with another graph
  @param {Graph} graph
  @return {Graph}
  */
  subtract(graph: Graph):Graph {
    let newGraph = new Graph(this.vertices, this.edges);
    newGraph.vertices = this.vertices.filter((v: Vertex) => {
      if(graph.vertices.indexOf(v)!=-1) return false;
      return true;
    });
    newGraph.edges = this.edges.filter((e: Edge) => {
      if(graph.edges.indexOf(e)!=-1) return false;
      return true;
    });
    return newGraph;
  }

}
