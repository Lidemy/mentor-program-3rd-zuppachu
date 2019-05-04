function alphaSwap(str) {
  return str.split('').map((el) => {
    if (el >= 'A' && el <= 'Z') {
      return el.toLowerCase();
    }
    return el.toUpperCase();
  }).join('');
}

/*
function alphaSwap(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      result += str[i].toLowerCase();
    } else if (str[i] >= 'a' && str[i] <= 'z') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
*/
console.log(alphaSwap('nICk'));
console.log(alphaSwap('nick'));
console.log(alphaSwap('Nick'));
console.log(alphaSwap(',hEllO123'));

module.exports = alphaSwap;
