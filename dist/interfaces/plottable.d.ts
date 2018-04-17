import { Canvas } from '../models/canvas';
export interface Plottable {
    plot: (canvas: Canvas) => void;
    rePaint: () => void;
    remove: () => void;
}
