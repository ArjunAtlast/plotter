"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
Helps to set multiple attributes to a DOM Element
@function
@param {Object} element - Element to which attributes are to be set
@param {Object} attributes - Attributes object
*/
function setElementAttributes(elem, attrs) {
    for (var key in attrs) {
        elem.setAttribute(key, attrs[key]);
    }
}
exports.setElementAttributes = setElementAttributes;
