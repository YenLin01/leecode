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
