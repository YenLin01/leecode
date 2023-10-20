let result = [];
permutation(["A", "B", "C", "D"], 0);
console.log(result);

function permutation(arr, start) {
  if (start >= arr.length) {
    result.push([...arr]);
  } else {
    for (let i = start; i < arr.length; i++) {
      swap(arr, start, i);
      permutation(arr, start + 1);
      swap(arr, start, i);
    }
  }
}

function swap(arr, n1, n2) {
  let temp = arr[n2];
  arr[n2] = arr[n1];
  arr[n1] = temp;
}
