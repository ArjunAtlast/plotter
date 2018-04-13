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
/*All sides Parallel*/
var Parallellogram = /** @class */ (function (_super) {
    __extends(Parallellogram, _super);
    function Parallellogram(beginVertex, length, height, slant_height, edge_style) {
        var _this = this;
        var x = utility_1.precisionRound(slant_height * Math.cos(Math.asin(height / slant_height)), 5);
        var b = beginVertex;
        var p = [beginVertex];
        p.push(new vertex_1.Vertex(b.x + length, b.y, b.radius, b.graphic));
        p.push(new vertex_1.Vertex(b.x + length - x, b.y + height, b.radius, b.graphic));
        p.push(new vertex_1.Vertex(b.x - x, b.y + height, b.radius, b.graphic));
        _this = _super.call(this, p, edge_style) || this;
        return _this;
    }
    return Parallellogram;
}(shape_1.Shape));
exports.Parallellogram = Parallellogram;
/*regular Parallellogram*/
var Rhombus = /** @class */ (function (_super) {
    __extends(Rhombus, _super);
    function Rhombus(beginVertex, length, height, edge_style) {
        return _super.call(this, beginVertex, length, height, length, edge_style) || this;
    }
    return Rhombus;
}(Parallellogram));
exports.Rhombus = Rhombus;
/*right Parallellogram*/
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(beginVertex, length, height, edge_style) {
        return _super.call(this, beginVertex, length, height, height, edge_style) || this;
    }
    return Rectangle;
}(Parallellogram));
exports.Rectangle = Rectangle;
/*regular Rectangle*/
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(beginVertex, length, edge_style) {
        return _super.call(this, beginVertex, length, length, edge_style) || this;
    }
    return Square;
}(Rectangle));
exports.Square = Square;
/*Two pairs of parallel sides*/
var Trapezoid = /** @class */ (function (_super) {
    __extends(Trapezoid, _super);
    function Trapezoid(baseVertex, base_length, height, left_slant_height, right_slant_height, edge_style) {
        var _this = this;
        var lx = utility_1.precisionRound(left_slant_height * Math.cos(Math.asin(height / left_slant_height)), 5);
        var rx = utility_1.precisionRound(right_slant_height * Math.cos(Math.asin(height / right_slant_height)), 5);
        var p = [baseVertex];
        var b = baseVertex;
        p.push(new vertex_1.Vertex(b.x + base_length, b.y, b.radius, b.graphic));
        p.push(new vertex_1.Vertex(b.x + base_length - rx, b.y - height, b.radius, b.graphic));
        p.push(new vertex_1.Vertex(b.x + lx, b.y - height, b.radius, b.graphic));
        _this = _super.call(this, p, edge_style) || this;
        return _this;
    }
    return Trapezoid;
}(shape_1.Shape));
exports.Trapezoid = Trapezoid;
