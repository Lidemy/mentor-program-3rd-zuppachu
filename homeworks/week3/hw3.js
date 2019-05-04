function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      // console.log(n, i);
      return false;
    }
  }
  return true;
}
// isPrime(16);
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(15));
console.log(isPrime(37));
console.log(isPrime(38));
module.exports = isPrime;
