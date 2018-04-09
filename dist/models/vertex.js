"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphic_1 = require("./graphic");
var utility_1 = require("../helpers/utility");
var Vertex = /** @class */ (function () {
    /**
      Creates a new Vertex
      @constructor
      @param {number} x - X Coordinate
      @param {number} y - Y Coordinate
      @param {number} radius - Radius of the vertex when plotted
    */
    function Vertex(x, y, radius, graphic) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this._graphic = graphic ? graphic : new graphic_1.Graphic("#B3B3B3", "#000000", 0);
    }
    /**
      Set vertex style for plotting
      @function
      @param {Graphic} graphic - Graphic object to style the vertex
    */
    Vertex.prototype.style = function (graphic) {
        this._graphic = graphic;
    };
    /**
      Plot vertex to canvas
      @function
      @param {Canvas} canvas
    */
    Vertex.prototype.plot = function (canvas) {
        var v = this.genSVG();
        canvas.add(v);
    };
    /**
      Generate SVG Circle Element for the vertex
      @function
      @return {SVGCircleElement}
    */
    Vertex.prototype.genSVG = function () {
        var v = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        //v.setAttribute("cx",this._x.toString());
        utility_1.setElementAttributes(v, {
            "cx": this.x.toString(),
            "cy": this.y.toString(),
            "r": this.radius.toString(),
            "fill": this._graphic.fill,
            "stroke": this._graphic.stroke,
            "stroke-width": this._graphic.strokeWidth.toString()
        });
        return v;
    };
    return Vertex;
}());
exports.Vertex = Vertex;
