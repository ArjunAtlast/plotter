"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vertex_1 = require("./vertex");
var edge_1 = require("./edge");
var utility_1 = require("../helpers/utility");
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
    Graph.prototype.centroid = function () {
        var sx = 0;
        var sy = 0;
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var v = _a[_i];
            sx += v.x;
            sy += v.y;
        }
        var n = this.vertices.length;
        return new vertex_1.Vertex(utility_1.precisionRound(sx / n, 5), utility_1.precisionRound(sy / n, 5), 0);
    };
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
    Create a copy of the graph
    @function
    @return {Graph}
    */
    Graph.prototype.copy = function () {
        var vs = [];
        var es = [];
        var added = [];
        for (var _i = 0, _a = this.edges; _i < _a.length; _i++) {
            var e = _a[_i];
            var si = added.indexOf(e.start);
            var ei = added.indexOf(e.end);
            var start = void 0;
            var end = void 0;
            if (si != -1) {
                start = vs[si];
            }
            else {
                start = e.start.copy();
                vs.push(start);
                added.push(e.start);
            }
            if (ei != -1) {
                end = vs[ei];
            }
            else {
                end = e.end.copy();
                vs.push(end);
                added.push(e.end);
            }
            es.push(new edge_1.Edge(start, end, e.graphic));
        }
        var remV = this.vertices.filter(function (vertex) {
            if (added.indexOf(vertex) != -1)
                return false;
            return true;
        }).map(function (v) {
            return v.copy();
        });
        //vs = vs.concat(remV);
        return new Graph(vs, es);
    };
    /**
    Rotate graph based on an axis
    @function
    @param {Vertex} axis - Axis point of rotation
    @param {number} angle - Angle in radians
    */
    Graph.prototype.rotate = function (angle, axis) {
        if (axis === void 0) { axis = this.centroid(); }
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var v = _a[_i];
            v.rotate(axis, angle);
        }
    };
    /**
    Translate graph by the given distance in x and y axis
    @function
    @param {number} x - Axis point of rotation
    @param {number} y - Angle in radians
    */
    Graph.prototype.translate = function (x, y) {
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var v = _a[_i];
            v.translate(x, y);
        }
    };
    /**
    Scale the graph using the axis and ratio given
    @function
    @param {Vertex} axis - Axis point of Scale
    @param {number} ratio
    */
    Graph.prototype.scale = function (ratio, axis) {
        if (axis === void 0) { axis = this.centroid(); }
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var v = _a[_i];
            v.scale(axis, ratio);
        }
    };
    /**
    Join the graph with another graph by connecting corresponding vertices
    @param {Graph} graph
    @param {Graphic} edge_graphic
    @return {Graph}
    */
    Graph.prototype.join = function (graph, edge_graphic) {
        if (this.vertices.length == graph.vertices.length) {
            var newGraph = new Graph(this.vertices.slice(), this.edges.slice());
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
            for (var i = 0; i < this.vertices.length; i++) {
                newGraph.edges.push(new edge_1.Edge(this.vertices[i], graph.vertices[i], edge_graphic));
            }
            return newGraph;
        }
        return null;
    };
    /**
    Union the graph with another graph
    @param {Graph} graph
    @return {Graph}
    */
    Graph.prototype.union = function (graph) {
        var newGraph = new Graph(this.vertices.slice(), this.edges.slice());
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
    Graph.prototype.intersection = function (graph) {
        var newGraph = new Graph(this.vertices.slice(), this.edges.slice());
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
        var newGraph = new Graph(this.vertices.slice(), this.edges.slice());
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
