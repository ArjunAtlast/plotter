import { Shape } from '../shape';
import { Vertex } from '../vertex';
import { Graphic } from '../graphic';
export declare class Triangle extends Shape {
    constructor(baseVertex: Vertex, s1: number, s2: number, angle: number, edge_style?: Graphic);
    length(side: number): number | null;
    angle(pos: number, inDegrees?: boolean): number | null;
    height(base: number): number | null;
}
export declare class RightTriangle extends Triangle {
    constructor(baseVertex: Vertex, baseLength: number, height: number, edge_style?: Graphic);
}
export declare class EquiTriangle extends Triangle {
    constructor(baseVertex: Vertex, sideLength: number, edge_style?: Graphic);
}
export declare class IsoTriangle extends Triangle {
    constructor(baseVertex: Vertex, baseLength: number, sideLength: number, edge_style?: Graphic);
}
