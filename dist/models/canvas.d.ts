export declare class Canvas {
    name: string;
    container: HTMLElement;
    width: number;
    height: number;
    private svg?;
    /**
      Canvas for plotting the graph
      @constructor
      @param {number} width - Width of the canvas in pixels
      @param {number} height - Height of the canvas in pixels
      @param {HTMLElement} container - Container of the canvas
      @param {string} name - Name of the canvas to identify in case of multiple canvases
    */
    constructor(width: number, height: number, container: HTMLElement, name: string);
    /**
      Initialize Canvas
      @function
      @return {boolean}
    */
    init(): boolean;
    /**
      Plot elements to canvas
      @function
      @param {SVGElement} element - Element to be added to canvas
    */
    add(elem: SVGElement): void;
}
