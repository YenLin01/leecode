function hanoi(n, from, between, target) {
  console.log(
    `now is ${n},    from is [${from}],    between is [${between}],    target is[${target}]`
  );
  if (n === 1) {
    let element = from.pop();
    target.push(element);
  } else {
    console.log("------------");
    hanoi(n - 1, from, target, between);
    hanoi(1, from, between, target);
    hanoi(n - 1, between, from, target);
  }
}

function starter(n) {
  let start = [];
  while (n > 0) {
    start.push(n);
    n--;
  }
  return start;
}

function resultHa(n) {
  let start = starter(n);
  let between = [];
  let result = [];

  hanoi(n, start, between, result);
  console.log(result);
}

resultHa(4);
