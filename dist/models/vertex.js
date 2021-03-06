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
        this.links = [];
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
    Re render the vertex
    @function
    */
    Vertex.prototype.rePaint = function () {
        if (this.svg) {
            utility_1.setElementAttributes(this.svg, {
                "cx": this.x.toString(),
                "cy": this.y.toString(),
                "r": this.radius.toString(),
                "fill": this._graphic.fill,
                "stroke": this._graphic.stroke,
                "stroke-width": this._graphic.strokeWidth.toString()
            });
            for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
                var obj = _a[_i];
                try {
                    obj.rePaint();
                }
                catch (e) {
                    console.error("Cannot call rePaint() method of linked object" + obj);
                }
            }
        }
    };
    /**
    Remove the vertex from canvas
    @function
    */
    Vertex.prototype.remove = function () {
        if (this.svg) {
            this.svg.remove();
        }
        for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
            var obj = _a[_i];
            try {
                obj.remove();
            }
            catch (e) {
                console.error("Cannot call remove() method of linked object" + obj);
            }
        }
    };
    /**
    Link Items to the vertex
    @function
    */
    Vertex.prototype.link = function (obj) {
        this.links.push(obj);
    };
    Vertex.prototype.linkMultiple = function (objs) {
        for (var _i = 0, objs_1 = objs; _i < objs_1.length; _i++) {
            var obj = objs_1[_i];
            this.link(obj);
        }
    };
    /**
    Remove an item link
    @function
    */
    Vertex.prototype.unlink = function (obj) {
        this.links = this.links.filter(function (lnk) {
            if (lnk === obj)
                return false;
            return true;
        });
    };
    Vertex.prototype.unlinkMultiple = function (objs) {
        this.links = this.links.filter(function (lnk) {
            if (objs.indexOf(lnk) != -1)
                return false;
            return true;
        });
    };
    Vertex.prototype.unlinkAll = function () {
        this.links = [];
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
        return utility_1.precisionRound(Math.atan2(yd, xd), 5);
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
    /**
    Rotate the vertex based on an axis
    @function
    @param {Vertex} axis - Axis point of rotation
    @param {number} angle - Angle in radians
    */
    Vertex.prototype.rotate = function (axis, angle) {
        var a = axis.angleTo(this);
        var an = (angle + a) % (2 * Math.PI);
        var d = axis.distanceFrom(this);
        var v = axis.vertexAt(an, d, 0);
        this.x = v.x;
        this.y = v.y;
    };
    /**
    Translate vertex by the given distance in x and y axis
    @function
    @param {number} x - Axis point of rotation
    @param {number} y - Angle in radians
    */
    Vertex.prototype.translate = function (x, y) {
        this.x += x;
        this.y += y;
    };
    /**
    Scale the vertex using the axis and ratio given
    @function
    @param {Vertex} axis - Axis point of Scale
    @param {number} ratio
    */
    Vertex.prototype.scale = function (axis, ratio) {
        var dx = this.x - axis.x;
        var dy = this.y - axis.y;
        ratio = Math.abs(ratio);
        this.translate((ratio - 1) * dx, (ratio - 1) * dy);
    };
    /**
    Create a copy of the vertex
    @function
    @return {Vertex}
    */
    Vertex.prototype.copy = function () {
        return new Vertex(this.x, this.y, this.radius, this.graphic);
    };
    return Vertex;
}());
exports.Vertex = Vertex;
