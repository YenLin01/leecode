const { func } = require("joi");

let Array1 = [1, [2], 3];
let Array2 = [1, 2, 3];
let temp = [];

var NestedIterator = function (nestedList) {
  for (j = 0; j < nestedList.length; j++) {
    if (Array.isArray(nestedList[j])) {
      NestedIterator(nestedList[j]);
      console.log(nestedList[j]);
    } else {
      temp.push(nestedList[j]);
    }
  }
  return temp;
};
