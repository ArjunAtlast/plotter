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
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape(points, edge_style) {
        var _this = this;
        var e = [];
        for (var i = 1; i < points.length; i++) {
            e.push(new edge_1.Edge(points[i - 1], points[i], edge_style));
        }
        e.push(new edge_1.Edge(points[points.length - 1], points[0], edge_style));
        _this = _super.call(this, points, e) || this;
        return _this;
    }
    return Shape;
}(graph_1.Graph));
exports.Shape = Shape;
