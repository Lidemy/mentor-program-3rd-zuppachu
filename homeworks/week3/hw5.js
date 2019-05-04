function add(a, b) {
  // 補零
  let A = a;
  let B = b;
  const addZero = '0'.repeat(Math.abs(a.length - b.length)); // 字串長度
  // 如果 Ａ 長度大於 Ｂ， Ｂ 前方需補零。直式相加都是在前方補零。
  if (a.length > b.length) {
    B = addZero + b;
  } else {
    A = addZero + a;
  }
  // 字串變陣列後相加，取 sum
  const arrA = A.split('').reverse();
  const arrB = B.split('').reverse();
  const sumArr = [];

  // 決定哪個陣列長度較長，作為運算次數
  let num = 0;
  if (a.length >= b.length) {
    num = a.length;
  } else {
    num = b.length;
  }

  // 將陣列一個一個射入對齊相加
  for (let i = 0; i < num; i += 1) {
    sumArr.push(parseInt(arrA[i], 10) + parseInt(arrB[i], 10));
    // 因為陣列相加是由 sumArr[0] 開始(左到右)，但不符合直式加法由各位數（最右側）開始的運算方式
    // 將數字在倒轉之下，判斷相加是否大於 10
    if (sumArr[i] >= 10) {
      sumArr[i] -= 10;
      if (i !== 0) { // 如果不是 sumArr[0]的話，下一位置`（sumArr[i + 1]） + 1`
        sumArr[i + 1] += 1;
      } else { // 如果是最後一位的話，直接補 1
        sumArr.push(1);
      }
    }
  }
  return sumArr.reverse().join('');
}

console.log(add('123', '12'));
console.log(add('12312383813881381381', '129018313819319831'));
module.exports = add;
