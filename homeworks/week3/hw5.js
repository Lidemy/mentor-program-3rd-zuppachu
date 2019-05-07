function add(a, b) {
  // 判斷兩數長度，較短的補零（）
  let A = a;
  let B = b;

  if (a.length < b.length) {
    A = '0'.repeat(b.length - a.length) + a;
  } else {
    B = '0'.repeat(a.length - b.length) + b;
  }

  // 將字串變陣列後，用迴圈相加，取 sum，若進位，前一數 +1
  const arrA = A.split('');
  const arrB = B.split('');
  const ans = [];

  // 補零過後的 arr 長度都是一樣的～ 所以不必特別寫出哪個字串長度較長
  for (let i = 0; i < arrA.length; i += 1) {
    ans.push(parseInt(arrA[i], 10) + parseInt(arrB[i], 10));
  }

  // 進位處理
  for (let i = ans.length - 1; i > 0; i -= 1) {
    if (ans[i] > 9) {
      ans[i] -= 10;
      ans[i - 1] = ans[i - 1] + 1;
    }
  }
  return ans.join('');
}

console.log(add('123', '18'));
console.log(add('9', '9'));
console.log(add('18', '286'));
module.exports = add;
