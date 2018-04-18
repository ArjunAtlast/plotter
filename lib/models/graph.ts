import { Vertex } from './vertex';
import { Edge } from './edge';
import { Canvas } from './canvas';
import { Plottable } from "../interfaces/plottable";
import { precisionRound } from '../helpers/utility';
import { Graphic } from './graphic';

export class Graph implements Plottable{
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

  centroid(): Vertex {
    let sx = 0;
    let sy = 0;
    for(var v of this.vertices) {
      sx+=v.x;
      sy+=v.y;
    }
    let n = this.vertices.length;
    return new Vertex( precisionRound(sx/n,5), precisionRound(sy/n,5), 0);
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
  Create a copy of the graph
  @function
  @return {Graph}
  */
  copy(): Graph {
    var vs: Vertex[] = [];
    var es: Edge[] = [];
    var added: Vertex[] = [];

    for(let e of this.edges) {
      let si = added.indexOf(e.start);
      let ei = added.indexOf(e.end);
      let start:Vertex;
      let end:Vertex;

      if(si!=-1) {
        start = vs[si];
      }
      else {
        start = e.start.copy();
        vs.push(start);
        added.push(e.start);
      }

      if(ei!=-1) {
        end = vs[ei];
      }
      else {
        end = e.end.copy();
        vs.push(end);
        added.push(e.end);
      }

      es.push(new Edge(start, end, e.graphic));

    }
    let remV = this.vertices.filter((vertex) => {
      if(added.indexOf(vertex)!=-1) return false;
      return true;
    }).map((v) => {
      return v.copy();
    });

    //vs = vs.concat(remV);
    return new Graph(vs, es);
  }

  /**
  Rotate graph based on an axis
  @function
  @param {Vertex} axis - Axis point of rotation
  @param {number} angle - Angle in radians
  */
  rotate(angle:number,axis:Vertex = this.centroid()) {
    for(var v of this.vertices) {
      v.rotate(axis, angle);
    }
  }

  /**
  Translate graph by the given distance in x and y axis
  @function
  @param {number} x - Axis point of rotation
  @param {number} y - Angle in radians
  */
  translate(x: number, y:number) {
    for(var v of this.vertices) {
      v.translate(x, y);
    }
  }

  /**
  Scale the graph using the axis and ratio given
  @function
  @param {Vertex} axis - Axis point of Scale
  @param {number} ratio
  */
  scale(ratio:number, axis: Vertex = this.centroid()) {
    for(var v of this.vertices) {
      v.scale(axis, ratio);
    }
  }

  /**
  Join the graph with another graph by connecting corresponding vertices
  @param {Graph} graph
  @param {Graphic} edge_graphic
  @return {Graph}
  */
  join(graph: Graph, edge_graphic?: Graphic):Graph|null {
    if(this.vertices.length == graph.vertices.length) {
      let newGraph = new Graph([...this.vertices], [...this.edges]);
      for(let v of graph.vertices) {
        if(newGraph.vertices.indexOf(v)==-1) newGraph.vertices.push(v)
      }
      for(let e of graph.edges) {
        if(newGraph.edges.indexOf(e)==-1) newGraph.edges.push(e)
      }
      for(let i=0; i<this.vertices.length; i++) {
        newGraph.edges.push(new Edge(this.vertices[i], graph.vertices[i], edge_graphic));
      }
      return newGraph;
    }
    return null;
  }

  /**
  Union the graph with another graph
  @param {Graph} graph
  @return {Graph}
  */
  union(graph: Graph):Graph {
    let newGraph = new Graph([...this.vertices], [...this.edges]);
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
  intersection(graph: Graph):Graph {
    let newGraph = new Graph([...this.vertices], [...this.edges]);
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
    let newGraph = new Graph([...this.vertices], [...this.edges]);
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
