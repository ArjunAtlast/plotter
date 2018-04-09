"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vertex = /** @class */ (function () {
    /**
    Creates a new Vertex
    @constructor
    @param {number} x - X Coordinate
    @param {number} y - Y Coordinate
    @param {number} radius - Radius of the vertex when plotted
    */
    function Vertex(x, y, radius) {
        this._x = x;
        this._y = y;
        this._radius = radius;
    }
    /**
    Set vertex style for plotting
    @function
    @param {Graphic} graphic - Graphic object to style the vertex
    */
    Vertex.prototype.style = function (graphic) {
        this._graphic = graphic;
    };
    Object.defineProperty(Vertex.prototype, "x", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vertex.prototype, "y", {
        get: function () {
            return this.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vertex.prototype, "radius", {
        get: function () {
            return this.radius;
        },
        enumerable: true,
        configurable: true
    });
    return Vertex;
}());
exports.Vertex = Vertex;
