import { Graph } from './graph';
import { Vertex } from './vertex';
import { Edge } from './edge';
import { Graphic } from './graphic';

export class Path extends Graph {

  constructor(points:Vertex[], edge_style?:Graphic) {
    let e:Edge[] = [];
    for(let i=1; i<points.length; i++) {
      e.push(new Edge(points[i-1],points[i], edge_style));
    }

    super(points,e);
  }
}
