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
var Path = /** @class */ (function (_super) {
    __extends(Path, _super);
    function Path(points, edge_style) {
        var _this = this;
        var e = [];
        for (var i = 1; i < points.length; i++) {
            e.push(new edge_1.Edge(points[i - 1], points[i], edge_style));
        }
        _this = _super.call(this, points, e) || this;
        return _this;
    }
    return Path;
}(graph_1.Graph));
exports.Path = Path;
