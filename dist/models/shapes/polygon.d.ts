import { Shape } from '../shape';
import { Vertex } from '../vertex';
import { Graphic } from '../graphic';
export declare class Polygon extends Shape {
    constructor(center: Vertex, sides: number, radius: number, basePoint: Vertex, edge_style?: Graphic);
}
