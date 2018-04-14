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
var vertex_1 = require("../vertex");
var path_1 = require("../path");
var Step = /** @class */ (function (_super) {
    __extends(Step, _super);
    function Step(baseVertex, length, height, amount, edge_style) {
        var _this = this;
        var x = baseVertex.x;
        var y = baseVertex.y;
        var p = [];
        for (var i = 0; i < amount; i++) {
            p.push(new vertex_1.Vertex(x, y, baseVertex.radius, baseVertex.graphic));
            y -= height;
            p.push(new vertex_1.Vertex(x, y, baseVertex.radius, baseVertex.graphic));
            x += length;
        }
        _this = _super.call(this, p, edge_style) || this;
        return _this;
    }
    return Step;
}(path_1.Path));
exports.Step = Step;
