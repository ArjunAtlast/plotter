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
var path_1 = require("../path");
var vertex_1 = require("../vertex");
var Wave = /** @class */ (function (_super) {
    __extends(Wave, _super);
    function Wave(path, amount) {
        var _this = this;
        var p = [];
        if (path.vertices.length > 1) {
            var x = path.vertices[path.vertices.length - 1].x - path.vertices[0].x;
            var y = path.vertices[path.vertices.length - 1].y - path.vertices[0].y;
            for (var i = 0; i < amount; i++) {
                for (var _i = 0, _a = path.vertices; _i < _a.length; _i++) {
                    var v = _a[_i];
                    p.push(new vertex_1.Vertex(v.x + i * x, v.y + i * y, v.radius, v.graphic));
                }
            }
            _this = _super.call(this, p, path.edges[0].graphic) || this;
        }
        _this = _super.call(this, []) || this;
        return _this;
    }
    return Wave;
}(path_1.Path));
exports.Wave = Wave;
