// join
function join(str, concatStr) {
  let result = str[0];
  for (let i = 1; i < str.length; i += 1) {
    result += concatStr + str[i];
  }
  return result;
}
console.log(join([1, 2, 3], ''));
console.log(join(['a', 'b', 'c'], '!'));
console.log(join(['a', 1, 'b', 2, 'c', 3], ','));

// repeat
function repeat(str, times) {
  let ans = '';
  for (let i = 0; i < times; i += 1) {
    ans += str;
  }
  return ans;
}
console.log(repeat('yoyo', 2));
console.log(repeat('a', 5));
/*
i = 0; 0 < 2; ans = ''+'yoyo'; 0+1 = 1
i = 1; 1 < 2; ans = 'yoyo'+'yoyo'; 1+1 = 2
i = 2; 2 不小於 2 ， 跳出
return ans = 'yoyoyoyoyo'
*/
