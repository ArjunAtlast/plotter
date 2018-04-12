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
/**
Round number to certain decimal places
@function
@param {number} number - Number to be rounded
@param {number} precision - Number of decimal places to be rounded to
@return {number}
*/
function precisionRound(number, precision) {
    var shift = function (number, precision, reverseShift) {
        if (reverseShift) {
            precision = -precision;
        }
        var numArray = ("" + number).split("e");
        return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    };
    return shift(Math.round(shift(number, precision, false)), precision, true);
}
exports.precisionRound = precisionRound;
