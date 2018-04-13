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
var utility_1 = require("../../helpers/utility");
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(center, sides, radius, basePoint, edge_style) {
        var _this = this;
        var p = [];
        var ca = center.angleTo(basePoint); //angle of current node (incremented for each node)
        var ad = utility_1.precisionRound(2 * Math.PI / sides, 5); //angle between each edge
        for (var i = 0; i < sides; i++) {
            var newNode = center.vertexAt(ca, radius, basePoint.radius, basePoint.graphic);
            p.push(newNode);
            ca = (ca + ad) % (2 * Math.PI);
        }
        _this = _super.call(this, p, edge_style) || this;
        return _this;
    }
    return Polygon;
}(shape_1.Shape));
exports.Polygon = Polygon;
