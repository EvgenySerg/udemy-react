"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var numbers = [1, 2, 3, 4, 5];
var newnumbers = [].concat(numbers, [6]);
console.log(newnumbers);
var person = {
  name: 'Max'
};

var newPerson = _objectSpread({}, person, {
  age: 33
});

console.log(newPerson);

var filter = function filter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.filter(function (el) {
    return el % 2 === 0;
  });
};

var res = filter(1, 2, 3, 4, 5);
console.log(res);
n1 = numbers[0];
n2 = numbers[2];
console.log(n1, n2);
var person1 = {
  name: 'Max'
};

var secondPerson = _objectSpread({}, person);

person.name = 'Manu';
console.log(secondPerson);
var doublenumarr = numbers.map(function (n) {
  return n * 2;
});
console.log(doublenumarr);
//# sourceMappingURL=oindex.js.map