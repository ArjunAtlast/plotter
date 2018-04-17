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
var shape_1 = require("../shape");
var vertex_1 = require("../vertex");
var utility_1 = require("../../helpers/utility");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(baseVertex, s1, s2, angle, edge_style) {
        var _this = this;
        var a = baseVertex;
        var b = new vertex_1.Vertex(a.x + s1, a.y, a.radius, a.graphic);
        var c = a.vertexAt(-angle, s2, a.radius, a.graphic);
        _this = _super.call(this, [a, b, c], edge_style) || this;
        return _this;
    }
    Triangle.prototype.length = function (side) {
        if (side < 3) {
            var u = this.vertices[side];
            var v = this.vertices[(side + 1) % 3];
            return u.distanceFrom(v);
        }
        return null;
    };
    Triangle.prototype.angle = function (pos, inDegrees) {
        if (inDegrees === void 0) { inDegrees = false; }
        if (pos < 3) {
            var o = this.vertices[pos];
            var u = this.vertices[(pos + 1) % 3];
            var v = this.vertices[(pos + 2) % 3];
            var rad = utility_1.precisionRound(Math.abs(o.angleTo(u) - o.angleTo(v)), 5);
            if (rad > Math.PI)
                rad = 2 * Math.PI - rad;
            return inDegrees ? rad * 180 / Math.PI : rad;
        }
        return null;
    };
    Triangle.prototype.height = function (base) {
        if (base < 3) {
            var a = this.length((base + 2) % 3);
            var c = this.angle(base);
            if (a && c)
                return utility_1.precisionRound(a * Math.sin(c), 5);
        }
        return null;
    };
    return Triangle;
}(shape_1.Shape));
exports.Triangle = Triangle;
var RightTriangle = /** @class */ (function (_super) {
    __extends(RightTriangle, _super);
    function RightTriangle(baseVertex, baseLength, height, edge_style) {
        return _super.call(this, baseVertex, baseLength, height, Math.PI / 2, edge_style) || this;
    }
    return RightTriangle;
}(Triangle));
exports.RightTriangle = RightTriangle;
var EquiTriangle = /** @class */ (function (_super) {
    __extends(EquiTriangle, _super);
    function EquiTriangle(baseVertex, sideLength, edge_style) {
        return _super.call(this, baseVertex, sideLength, sideLength, Math.PI / 3, edge_style) || this;
    }
    return EquiTriangle;
}(Triangle));
exports.EquiTriangle = EquiTriangle;
var IsoTriangle = /** @class */ (function (_super) {
    __extends(IsoTriangle, _super);
    function IsoTriangle(baseVertex, baseLength, sideLength, edge_style) {
        var _this = this;
        var angle = Math.acos(baseLength / (2 * sideLength));
        _this = _super.call(this, baseVertex, baseLength, sideLength, angle, edge_style) || this;
        return _this;
    }
    return IsoTriangle;
}(Triangle));
exports.IsoTriangle = IsoTriangle;
