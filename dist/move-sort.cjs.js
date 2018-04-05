'use strict';

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var clamp = function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
};

function index (items) {
  var oldIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var newIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  // Ensure we're passing an array
  if (items.constructor !== Array) {
    throw "First argument must be of type `Array`.";
  }

  oldIndex = parseInt(oldIndex, 10);
  newIndex = parseInt(newIndex, 10);

  if (isNaN(oldIndex) || isNaN(newIndex)) {
    throw "Second and third arguments must be parseable integers.";
  } // Hold the user's hand in case they do something silly like specify out-of-bounds indexes


  oldIndex = clamp(oldIndex, 0, items.length - 1);
  newIndex = clamp(newIndex, 0, items.length - 1);

  var itemRemovedArray = _toConsumableArray(items.slice(0, oldIndex)).concat(_toConsumableArray(items.slice(oldIndex + 1, items.length)));

  return _toConsumableArray(itemRemovedArray.slice(0, newIndex)).concat([items[oldIndex]], _toConsumableArray(itemRemovedArray.slice(newIndex, itemRemovedArray.length)));
}

module.exports = index;
