export class Canvas {
  name:string = "myCanvas";
  container: HTMLElement = document.body;
  width:number = 500;
  height:number = 500;

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

  init():boolean {
    try {
      /* Create SVG Element */
      let svg = new SVGElement();
      svg.setAttribute("id",this.name);
      svg.setAttribute("width",this.width+"px");
      svg.setAttribute("height", this.height+"px");

      /* Add it to container */
      this.container.appendChild(svg);
      return true;
    }
    catch(error) {
      return false;
    }
  }
}
