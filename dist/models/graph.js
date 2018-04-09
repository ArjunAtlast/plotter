"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Graph = /** @class */ (function () {
    /**
      Creates a new Graph
      @constructor
      @param {Vertex[]} vertices - X Coordinate
      @param {Edge[]} edges - Y Coordinate
    */
    function Graph(vertices, edges) {
        this.vertices = vertices;
        this.edges = edges;
    }
    /**
      Plot vertex to canvas
      @function
      @param {Canvas} canvas
    */
    Graph.prototype.plot = function (canvas) {
        for (var _i = 0, _a = this.edges; _i < _a.length; _i++) {
            var e = _a[_i];
            e.plot(canvas);
        }
        for (var _b = 0, _c = this.vertices; _b < _c.length; _b++) {
            var v = _c[_b];
            v.plot(canvas);
        }
    };
    return Graph;
}());
exports.Graph = Graph;
