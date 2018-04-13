import { Shape } from '../shape';
import { Vertex } from '../vertex';
import { Graphic } from '../graphic';
export declare class Parallellogram extends Shape {
    constructor(beginVertex: Vertex, length: number, height: number, slant_height: number, edge_style?: Graphic);
}
export declare class Rhombus extends Parallellogram {
    constructor(beginVertex: Vertex, length: number, height: number, edge_style?: Graphic);
}
export declare class Rectangle extends Parallellogram {
    constructor(beginVertex: Vertex, length: number, height: number, edge_style?: Graphic);
}
export declare class Square extends Rectangle {
    constructor(beginVertex: Vertex, length: number, edge_style?: Graphic);
}
export declare class Trapezoid extends Shape {
    constructor(baseVertex: Vertex, base_length: number, height: number, left_slant_height: number, right_slant_height: number, edge_style?: Graphic);
}
