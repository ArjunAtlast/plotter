/**
Helps to set multiple attributes to a DOM Element
@function
@param {Object} element - Element to which attributes are to be set
@param {Object} attributes - Attributes object
*/
export function setElementAttributes(elem:any, attrs:any) {
  for(var key in attrs) {
    elem.setAttribute(key, attrs[key]);
  }
}

/**
Round number to certain decimal places
@function
@param {number} number - Number to be rounded
@param {number} precision - Number of decimal places to be rounded to
@return {number}
*/
export function precisionRound(number:number, precision:number) {
  var shift = function (number:number, precision:number, reverseShift:boolean) {
    if (reverseShift) {
      precision = -precision;
    }
    let numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
}
