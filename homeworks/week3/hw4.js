// 方法三
function isPalindromes(str) {
  let ans = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    ans += str[i];
    if (ans === str) {
      return true; // 不是 true，直接跳出～ 答 false
    }
  }
  return false;
}

/*
// 方法二：邏輯同上，但這樣寫法比較好懂
function isPalindromes(str) {
  let ans = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    ans += str[i];
  }
  if (ans === str) {
    return true;
  }
  return false;
}

// 方法一： 迴文大絕招 str.split('').reverse().join('')
function isPalindromes(str) {
  const code = str.split('').reverse().join('');
  // str.split() -> ['abc']
  // str.split('') -> ['a', 'b', 'c']
  // console.log(code);
  if (code === str) {
    return true;
  }
  return false;
}
*/
console.log(isPalindromes('aaaaa'));
console.log(isPalindromes('abc'));
console.log(isPalindromes('apple'));
console.log(isPalindromes('112211'));
module.exports = isPalindromes;
