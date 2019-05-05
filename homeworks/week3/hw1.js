function stars(n) {
  /*
  一開始多餘的寫法，慢慢修改變成比較精簡版本。
  覺得小進步的過程彌足珍貴，還是留下來好了～
  const star = ['*'];
  if (n === 1) return star;
  if (n >= 1 && n <= 30) {
  */
  const ans = [];
  for (let i = 1; i <= n; i += 1) {
    ans.push('*'.repeat(i));
  }
  return ans;
  // }
}

console.log(stars(1));
console.log(stars(5));

module.exports = stars;
