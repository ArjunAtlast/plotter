"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas = /** @class */ (function () {
    function Canvas(name, container, width, height) {
        this.name = "myCanvas";
        this.container = document.body;
        this.width = 500;
        this.height = 500;
        this.name = name;
        this.container = container;
        this.width = width;
        this.height = height;
    }
    Canvas.prototype.init = function () {
        try {
            var svg = new SVGElement();
            return true;
        }
        catch (error) {
            return false;
        }
    };
    return Canvas;
}());
exports.Canvas = Canvas;
