import { Path } from '../path';
import { Vertex } from '../vertex';
import { Edge } from '../edge';
import { Graphic } from '../graphic';

export class Wave extends Path {

  constructor(path: Path, amount: number) {
    let p:Vertex[] = [];
    let x = path.vertices[path.vertices.length-1].x - path.vertices[0].x;
    let y = path.vertices[path.vertices.length-1].y - path.vertices[0].y;

    for(let i=0; i<amount; i++) {
      for(let v of path.vertices) {
        p.push(new Vertex(v.x+i*x, v.y+i*y, v.radius, v.graphic));
      }
    }
    super(p, path.edges[0].graphic);
  }
}
