import { Graph } from './graph';
import { Vertex } from './vertex';
import { Edge } from './edge';
import { Graphic, DEFAULT_STYLE } from './graphic';
import { precisionRound } from '../helpers/utility';

export class Mesh extends Graph {

  constructor(core:Vertex, node:Vertex, node_count:number, radius:number, edge_style?:Graphic) {

    if(!edge_style) edge_style = DEFAULT_STYLE;

    let v:Vertex[] = [core];
    let e:Edge[] = [];

    let ca = core.angleTo(node); //angle of current node (incremented for each node)
    let ad = precisionRound(2*Math.PI/node_count, 5); //angle between each edge
    
    let prevNode:Vertex|null = null;
    let firstNode:Vertex|null = null;

    for(let i=0; i<node_count; i++) {
      console.log(ca);
      var newNode = core.vertexAt(ca,radius,node.radius,node.graphic);
      var newEdge = new Edge(core,newNode,edge_style);
      v.push(newNode);
      e.push(newEdge);
      if(prevNode) {
        var meshEdge = new Edge(prevNode,newNode,edge_style)
        e.push(meshEdge);
      }
      else {
        firstNode = newNode;
      }
      ca = (ca+ad)%(2*Math.PI);
      prevNode = newNode;
    }

    if(prevNode && firstNode) e.push(new Edge(prevNode, firstNode, edge_style));

    super(v,e);
  }

}
