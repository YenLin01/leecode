/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function check(str) {
  for (i = 1; i < str.length; i++) {
    if (str[0] == "#") {
      return check(str.slice(i));
    }
    if (str[i] == "#") {
      return check(str.slice(0, i - 1) + str.slice(i + 1));
    }
  }
  return str;
}

var backspaceCompare = function (s, t) {
  return check(s) == check(t);
};

function check1(str) {
  for (i = 0; i < str.length; i++) {
    if (str[i] == "#") {
      console.log(i - 1);
      return check(str.slice(0, i - 1) + str.slice(i + 1));
    }
  }
  return str;
}

str = "#123";
console.log(str.slice(0, -1));
// console.log(check1(str));
