// DIY

function pascal(n) {
  if (n == 1) {
    return [1];
  }
  if (n == 2) {
    return [1, 1];
  }
  if (n >= 3) {
    let result = [1];
    let arr = pascal(n - 1);
    for (let x = 0; x < arr.length - 1; x++) {
      let newElement = arr[x] + arr[x + 1];
      result[x + 1] = newElement;
    }
    result.push(1);
    return result;
  }
}

// course

function PascalCourse(n) {
  let f = [1];
  let m = [];
  let i = 1;

  while (i <= n) {
    f = [1].concat(m).concat([1]);
    console.log(`adding ${m}`);
    m = [];
    for (let j = 0; j <= f.length - 2; j++) {
      m.push(f[j] + f[j + 1]);
    }
    console.log(`for loop ${m}`);
    i++;
  }
  return f;
}

console.log(PascalCourse(3));
