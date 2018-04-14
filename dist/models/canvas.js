"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = require("../helpers/utility");
var Canvas = /** @class */ (function () {
    /**
      Canvas for plotting the graph
      @constructor
      @param {number} width - Width of the canvas in pixels
      @param {number} height - Height of the canvas in pixels
      @param {HTMLElement} container - Container of the canvas
      @param {string} name - Name of the canvas to identify in case of multiple canvases
    */
    function Canvas(width, height, container, name) {
        this.name = "myCanvas";
        this.container = document.body;
        this.width = 500;
        this.height = 500;
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
    Canvas.prototype.init = function () {
        try {
            /* Create SVG Element */
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            utility_1.setElementAttributes(svg, {
                "id": this.name,
                "width": this.width + "px",
                "height": this.height + "px"
            });
            /*Store it*/
            this.svg = svg;
            /* Add it to container */
            this.container.appendChild(svg);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    /**
      Plot elements to canvas
      @function
      @param {SVGElement} element - Element to be added to canvas
    */
    Canvas.prototype.add = function (elem) {
        if (this.svg != undefined)
            this.svg.appendChild(elem);
        else
            throw new Error("Canvas not Initialized.");
    };
    return Canvas;
}());
exports.Canvas = Canvas;
