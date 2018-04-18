"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Graphic = /** @class */ (function () {
    /**
    @constructor
    @param {string} fill - Hex code of the fill color
    @param {string} stroke - Hex code of the stroke color
    @param {number} strokeWidth - Width of the stroke
    */
    function Graphic(fill, stroke, strokeWidth) {
        if (strokeWidth === void 0) { strokeWidth = 1; }
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }
    return Graphic;
}());
exports.Graphic = Graphic;
exports.DEFAULT_STYLE = new Graphic("#fdfdfd", "#2e2e2e", 5);
