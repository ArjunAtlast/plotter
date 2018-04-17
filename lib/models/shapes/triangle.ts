import { Shape } from '../shape';
import { Vertex } from '../vertex';
import { Graphic } from '../graphic';
import { precisionRound } from '../../helpers/utility';

export class Triangle extends Shape {

  constructor(baseVertex: Vertex, s1: number, s2: number, angle: number, edge_style?: Graphic) {
    let a = baseVertex;
    let b = new Vertex(a.x+s1, a.y, a.radius, a.graphic);
    let c = a.vertexAt(-angle, s2, a.radius, a.graphic);
    super([a,b,c], edge_style);
  }

  length(side: number) {
    if(side<3) {
      let u = this.vertices[side];
      let v = this.vertices[(side+1)%3]
      return u.distanceFrom(v);
    }
    return null;
  }

  angle(pos: number, inDegrees:boolean=false) {
    if(pos < 3) {
      let o = this.vertices[pos];
      let u = this.vertices[(pos+1)%3];
      let v = this.vertices[(pos+2)%3];
      var rad = precisionRound(Math.abs(o.angleTo(u) - o.angleTo(v)),5);
      if(rad > Math.PI) rad = 2*Math.PI - rad;
      return inDegrees? rad*180/Math.PI:rad;
    }
    return null;
  }

  height(base: number) {
    if(base < 3) {
      let a = this.length((base+2)%3);
      let c = this.angle(base);
      if(a && c) return precisionRound(a*Math.sin(c),5);
    }
    return null;
  }
}


export class RightTriangle extends Triangle {

  constructor(baseVertex: Vertex, baseLength: number, height: number, edge_style?:Graphic) {
    super(baseVertex, baseLength, height, Math.PI/2, edge_style);
  }
}

export class EquiTriangle extends Triangle {
  constructor(baseVertex: Vertex, sideLength: number, edge_style?:Graphic) {
    super(baseVertex, sideLength, sideLength, Math.PI/3, edge_style);
  }
}

export class IsoTriangle extends Triangle {

  constructor(baseVertex: Vertex, baseLength: number, sideLength: number, edge_style?:Graphic) {
    let angle = Math.acos(baseLength/(2*sideLength));
    super(baseVertex, baseLength, sideLength, angle, edge_style);
  }
}
