import { Vertex } from '../vertex';
import { Graphic } from '../graphic';
import { Path } from '../path';

export class Step extends Path {

  constructor(baseVertex: Vertex, length: number, height: number, amount: number, edge_style?: Graphic) {
    let x = baseVertex.x;
    let y = baseVertex.y;
    let p:Vertex[] = [];

    for(let i=0; i<amount; i++) {
      p.push(new Vertex(x, y, baseVertex.radius, baseVertex.graphic));
      y -= height;
      p.push(new Vertex(x, y, baseVertex.radius, baseVertex.graphic));
      x += length;
    }
    super(p,edge_style);
  }
}
