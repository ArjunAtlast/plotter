import { setElementAttributes } from "../helpers/utility";

export class Canvas {
  name:string = "myCanvas";
  container: HTMLElement = document.body;
  width:number = 500;
  height:number = 500;
  private svg?:SVGElement;

  /**
    Canvas for plotting the graph
    @constructor
    @param {number} width - Width of the canvas in pixels
    @param {number} height - Height of the canvas in pixels
    @param {HTMLElement} container - Container of the canvas
    @param {string} name - Name of the canvas to identify in case of multiple canvases
  */
  constructor(width:number, height:number, container:HTMLElement, name:string) {
    this.name = name;
    this.container = container;
    this.width = width;
    this.height = height;
  }

  /**
    Initialize Canvas
    @function
    @return {boolean}
  */
  init():boolean {
    try {
      /* Create SVG Element */
      let svg = <SVGElement>document.createElementNS("http://www.w3.org/2000/svg","svg");
      console.log(svg);
      setElementAttributes(svg, {
        "id": this.name,
        "width": this.width+"px",
        "height": this.height+"px"
      });
      /*Store it*/
      this.svg = svg;

      /* Add it to container */
      this.container.appendChild(svg);
      return true;
    }
    catch(error) {
      return false;
    }
  }

  /**
    Plot elements to canvas
    @function
    @param {SVGElement} element - Element to be added to canvas
  */
  add(elem:SVGElement) {
    if(this.svg != undefined) this.svg.appendChild(elem);
    else throw new Error("Canvas not Initialized.");
  }
}
