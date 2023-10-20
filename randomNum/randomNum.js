const { number } = require("joi");

function random1() {
  let i = Math.random();
  i = i.toFixed(4) * 10000;

  return i;
}

console.log(random1());
// 7436
