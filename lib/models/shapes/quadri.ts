import { Shape } from '../shape';
import { Vertex } from '../vertex';
import { Graphic } from '../graphic';
import { precisionRound } from '../../helpers/utility';

/*All sides Parallel*/
export class Parallellogram extends Shape {

  constructor(beginVertex:Vertex, length:number, height:number, slant_height:number, edge_style?:Graphic) {
    let x = precisionRound(slant_height*Math.cos(Math.asin(height/slant_height)),5);
    let b = beginVertex;
    let p:Vertex[] = [beginVertex];
    p.push(new Vertex(b.x+length, b.y, b.radius, b.graphic));
    p.push(new Vertex(b.x+length-x, b.y+height, b.radius, b.graphic));
    p.push(new Vertex(b.x-x, b.y+height, b.radius, b.graphic));
    super(p, edge_style);
  }
}

/*regular Parallellogram*/
export class Rhombus extends Parallellogram {
    constructor(beginVertex:Vertex, length:number, height:number, edge_style?:Graphic) {
      super(beginVertex, length, height, length, edge_style);
    }
}

/*right Parallellogram*/
export class Rectangle extends Parallellogram {

  constructor(beginVertex:Vertex, length:number, height:number, edge_style?:Graphic) {
    super(beginVertex, length, height, height, edge_style);
  }
}
/*regular Rectangle*/
export class Square extends Rectangle {

  constructor(beginVertex:Vertex, length:number, edge_style?:Graphic) {
    super(beginVertex, length, length, edge_style);
  }
}

/*Two pairs of parallel sides*/
export class Trapezoid extends Shape {

  constructor(baseVertex:Vertex, base_length:number, height:number, left_slant_height:number, right_slant_height:number, edge_style?:Graphic) {
    let lx = precisionRound(left_slant_height*Math.cos(Math.asin(height/left_slant_height)),5);
    let rx = precisionRound(right_slant_height*Math.cos(Math.asin(height/right_slant_height)),5);

    let p:Vertex[] = [baseVertex];
    let b = baseVertex;

    p.push(new Vertex(b.x+base_length, b.y, b.radius, b.graphic));
    p.push(new Vertex(b.x+base_length-rx, b.y-height,b.radius, b.graphic));
    p.push(new Vertex(b.x+lx, b.y-height, b.radius, b.graphic));
    super(p, edge_style);
  }
}
