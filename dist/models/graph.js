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
    /**
    Re render the graph
    @function
    */
    Graph.prototype.rePaint = function () {
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var v = _a[_i];
            v.rePaint();
        }
        for (var _b = 0, _c = this.edges; _b < _c.length; _b++) {
            var e = _c[_b];
            e.rePaint();
        }
    };
    /**
    Remove graph from canvas
    @function
    */
    Graph.prototype.remove = function () {
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var v = _a[_i];
            v.unlinkAll();
            v.remove();
        }
        for (var _b = 0, _c = this.edges; _b < _c.length; _b++) {
            var e = _c[_b];
            e.remove();
        }
    };
    /**
    Union the graph with another graph
    @param {Graph} graph
    @return {Graph}
    */
    Graph.prototype.union = function (graph) {
        var newGraph = new Graph(this.vertices, this.edges);
        for (var _i = 0, _a = graph.vertices; _i < _a.length; _i++) {
            var v = _a[_i];
            if (newGraph.vertices.indexOf(v) == -1)
                newGraph.vertices.push(v);
        }
        for (var _b = 0, _c = graph.edges; _b < _c.length; _b++) {
            var e = _c[_b];
            if (newGraph.edges.indexOf(e) == -1)
                newGraph.edges.push(e);
        }
        return newGraph;
    };
    /**
    Intersect the graph with another graph
    @param {Graph} graph
    @return {Graph}
    */
    Graph.prototype.intersect = function (graph) {
        var newGraph = new Graph(this.vertices, this.edges);
        newGraph.vertices = this.vertices.filter(function (v) {
            if (graph.vertices.indexOf(v) != -1)
                return true;
            return false;
        });
        newGraph.edges = this.edges.filter(function (e) {
            if (graph.edges.indexOf(e) != -1)
                return true;
            return false;
        });
        return newGraph;
    };
    /**
    Subtract the graph with another graph
    @param {Graph} graph
    @return {Graph}
    */
    Graph.prototype.subtract = function (graph) {
        var newGraph = new Graph(this.vertices, this.edges);
        newGraph.vertices = this.vertices.filter(function (v) {
            if (graph.vertices.indexOf(v) != -1)
                return false;
            return true;
        });
        newGraph.edges = this.edges.filter(function (e) {
            if (graph.edges.indexOf(e) != -1)
                return false;
            return true;
        });
        return newGraph;
    };
    return Graph;
}());
exports.Graph = Graph;
