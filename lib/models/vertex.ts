import { Graphic } from "./graphic";

export class Vertex {

  private _x: number;
  private _y: number;
  private _radius: number;
  private _graphic?: Graphic;
  /**
  Creates a new Vertex
  @constructor
  @param {number} x - X Coordinate
  @param {number} y - Y Coordinate
  @param {number} radius - Radius of the vertex when plotted
  */
  constructor(x: number, y:number, radius:number) {
    this._x = x;
    this._y = y;
    this._radius = radius;
  }

  /**
  Set vertex style for plotting
  @function
  @param {Graphic} graphic - Graphic object to style the vertex
  */
  style(graphic:Graphic) {
    this._graphic = graphic;
  }

  get x():number {
    return this.x;
  }

  get y():number {
    return this.y;
  }

  get radius():number {
    return this.radius;
  }

}
