export declare class Graphic {
    fill: string;
    stroke: string;
    strokeWidth: number;
    /**
    @constructor
    @param {string} fill - Hex code of the fill color
    @param {string} stroke - Hex code of the stroke color
    @param {number} strokeWidth - Width of the stroke
    */
    constructor(fill: string, stroke: string, strokeWidth: number);
}
export declare const DEFAULT_STYLE: Graphic;
