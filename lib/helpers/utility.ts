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
