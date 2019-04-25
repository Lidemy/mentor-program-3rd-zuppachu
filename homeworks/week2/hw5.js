function join(arr, str) {
  const arrToStr = arr.toString();
  const ans = arrToStr.replace(/,/g, str);
  return ans;
}

console.log(join([1, 2, 3], ''));
console.log(join(['a', 'b', 'c'], '!'));
console.log(join(['a', 1, 'b', 2, 'c', 3], ','));

function repeat(str, n) {
  let ans = '';
  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < n; j += 1) {
      ans += str;
    }
  }
  return ans;
}

console.log(repeat('yoyo', 2));
console.log(repeat('a', 5));
