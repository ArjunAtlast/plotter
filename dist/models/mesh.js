"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graph_1 = require("./graph");
var edge_1 = require("./edge");
var graphic_1 = require("./graphic");
var utility_1 = require("../helpers/utility");
var Mesh = /** @class */ (function (_super) {
    __extends(Mesh, _super);
    function Mesh(core, node, node_count, radius, edge_style) {
        var _this = this;
        if (!edge_style)
            edge_style = graphic_1.DEFAULT_STYLE;
        var v = [core];
        var e = [];
        var ca = core.angleTo(node); //angle of current node (incremented for each node)
        var ad = utility_1.precisionRound(2 * Math.PI / node_count, 5); //angle between each edge
        var prevNode = null;
        var firstNode = null;
        for (var i = 0; i < node_count; i++) {
            console.log(ca);
            var newNode = core.vertexAt(ca, radius, node.radius, node.graphic);
            var newEdge = new edge_1.Edge(core, newNode, edge_style);
            v.push(newNode);
            e.push(newEdge);
            if (prevNode) {
                var meshEdge = new edge_1.Edge(prevNode, newNode, edge_style);
                e.push(meshEdge);
            }
            else {
                firstNode = newNode;
            }
            ca = (ca + ad) % (2 * Math.PI);
            prevNode = newNode;
        }
        if (prevNode && firstNode)
            e.push(new edge_1.Edge(prevNode, firstNode, edge_style));
        _this = _super.call(this, v, e) || this;
        return _this;
    }
    return Mesh;
}(graph_1.Graph));
exports.Mesh = Mesh;
