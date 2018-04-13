"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphic_1 = require("./graphic");
var utility_1 = require("../helpers/utility");
var Edge = /** @class */ (function () {
    /**
      Creates a new Edge
      @constructor
      @param {Vertex} start - X Coordinate
      @param {Vertex} y - Y Coordinate
      @param {Graphic} radius - Radius of the vertex when plotted
    */
    function Edge(start, end, graphic) {
        this.start = start;
        this.end = end;
        this._graphic = graphic ? graphic : graphic_1.DEFAULT_STYLE;
    }
    /**
      Set vertex style for plotting
      @function
      @param {Graphic} graphic - Graphic object to style the vertex
    */
    Edge.prototype.style = function (graphic) {
        this._graphic = graphic;
    };
    /**
      Plot vertex to canvas
      @function
      @param {Canvas} canvas
    */
    Edge.prototype.plot = function (canvas) {
        var v = this.genSVG();
        canvas.add(v);
    };
    /**
    Re render the edge
    @function
    */
    Edge.prototype.rePaint = function () {
        utility_1.setElementAttributes(this.svg, {
            "x1": this.start.x.toString(),
            "y1": this.start.y.toString(),
            "x2": this.end.x.toString(),
            "y2": this.end.y.toString(),
            "fill": this._graphic.fill,
            "stroke": this._graphic.stroke,
            "stroke-width": this._graphic.strokeWidth.toString()
        });
    };
    /**
    Remove the edge from canvas
    @function
    */
    Edge.prototype.remove = function () {
        if (this.svg) {
            this.svg.remove();
        }
    };
    /**
      Generate SVG Circle Element for the vertex
      @function
      @return {SVG}
    */
    Edge.prototype.genSVG = function () {
        var v = document.createElementNS("http://www.w3.org/2000/svg", "line");
        //v.setAttribute("cx",this._x.toString());
        utility_1.setElementAttributes(v, {
            "x1": this.start.x.toString(),
            "y1": this.start.y.toString(),
            "x2": this.end.x.toString(),
            "y2": this.end.y.toString(),
            "fill": this._graphic.fill,
            "stroke": this._graphic.stroke,
            "stroke-width": this._graphic.strokeWidth.toString()
        });
        this.svg = v;
        return v;
    };
    return Edge;
}());
exports.Edge = Edge;
