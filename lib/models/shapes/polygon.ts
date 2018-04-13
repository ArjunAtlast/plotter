import { Shape } from '../shape';
import { Vertex } from '../vertex';
import { Graphic } from '../graphic';
import { precisionRound } from '../../helpers/utility';

export class Polygon extends Shape {

  constructor(center:Vertex, sides:number,  radius:number, basePoint:Vertex, edge_style?:Graphic) {

    let p:Vertex[] = [];

    let ca = center.angleTo(basePoint) //angle of current node (incremented for each node)
    let ad = precisionRound(2*Math.PI/sides, 5); //angle between each edge

    for(let i=0; i<sides; i++) {
      var newNode = center.vertexAt(ca,radius,basePoint.radius,basePoint.graphic);
      p.push(newNode);
      ca = (ca+ad)%(2*Math.PI);
    }

    super(p,edge_style);
  }
}
