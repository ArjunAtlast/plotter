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
var utility_1 = require("../helpers/utility");
var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star(core, node, node_count, radius, edge_style) {
        var _this = this;
        var v = [core];
        var e = [];
        var ca = core.angleTo(node); //angle of current node (incremented for each node)
        var ad = utility_1.precisionRound(2 * Math.PI / node_count, 5); //angle between each edge
        for (var i = 0; i < node_count; i++) {
            var newNode = core.vertexAt(ca, radius, node.radius, node.graphic);
            var newEdge = new edge_1.Edge(core, newNode, edge_style);
            v.push(newNode);
            e.push(newEdge);
            ca = (ca + ad) % (2 * Math.PI);
        }
        _this = _super.call(this, v, e) || this;
        return _this;
    }
    return Star;
}(graph_1.Graph));
exports.Star = Star;
