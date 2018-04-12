export class Graphic {
  fill:string;
  stroke:string;
  strokeWidth:number;

  /**
  @constructor
  @param {string} fill - Hex code of the fill color
  @param {string} stroke - Hex code of the stroke color
  @param {number} strokeWidth - Width of the stroke
  */
  constructor(fill:string, stroke:string, strokeWidth:number) {
    this.fill = fill;
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;
  }
}

export const DEFAULT_STYLE = new Graphic("#fdfdfd", "#2e2e2e", 5);
