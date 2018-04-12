import { Graph } from './graph';
import { Vertex } from './vertex';
import { Graphic } from './graphic';
export declare class Star extends Graph {
    constructor(core: Vertex, node: Vertex, node_count: number, radius: number, edge_style?: Graphic);
}
