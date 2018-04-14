import { Vertex } from '../vertex';
import { Graphic } from '../graphic';
import { Path } from '../path';
export declare class Step extends Path {
    constructor(baseVertex: Vertex, length: number, height: number, amount: number, edge_style?: Graphic);
}
