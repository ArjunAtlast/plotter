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
    Object.defineProperty(Vertex.prototype, "graphic", {
        get: function () {
            return this._graphic;
        },
        enumerable: true,
        configurable: true
    });
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
        this.svg = v;
        return v;
    };
    /**
    Calculate angle of a vertex from this vertex
    @function
    @param {Vertex} v - Attributes object
    @return {number}
    */
    Vertex.prototype.angleTo = function (v) {
        var xd = v.x - this.x;
        var yd = v.y - this.y;
        var dist = this.distanceFrom(v);
        //if distance is 0 then angle is 0
        if (dist == 0)
            return 0;
        var rads = Math.acos(xd / dist);
        return (yd >= 0) ? utility_1.precisionRound(rads, 5) : utility_1.precisionRound(Math.PI + rads, 5);
    };
    /**
    Calculate distance between vertices
    @function
    @param {Vertex} v - Attributes object
    @return {number}
    */
    Vertex.prototype.distanceFrom = function (v) {
        var xd = this.x - v.x;
        var yd = this.y - v.y;
        return utility_1.precisionRound(Math.sqrt(xd * xd + yd * yd), 5);
    };
    /**
    Create vertex at an angle and distance from this vertex
    @function
    @param {number} angle - Angle in radians
    @param {number} distance - Distance
    @param {number} radius - Radius of
    @param {Graphic} [graphic]
    @return {Vertex}
    */
    Vertex.prototype.vertexAt = function (angle, distance, radius, graphic) {
        var x = utility_1.precisionRound(this.x + distance * Math.cos(angle), 5);
        var y = utility_1.precisionRound(this.y + distance * Math.sin(angle), 5);
        var v = new Vertex(x, y, radius, graphic);
        return v;
    };
    return Vertex;
}());
exports.Vertex = Vertex;
