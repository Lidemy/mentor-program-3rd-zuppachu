// join
function join(str, concatStr) {
  let result = str[0];
  for (let i = 1; i < str.length; i += 1) {
    result += concatStr + str[i];
  }
  return result;
}
/*
一個蠢問題想問：
題目是 join(str, concatStr)，這樣是把陣列 [1,2,3] 當作引數，賦植直接給與「參數 str」？
這樣是否不需思考該如何將陣列轉化成 string？
那不論引數為什麼型態，賦值參數後，都是以參數為主要型態？
*/
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
