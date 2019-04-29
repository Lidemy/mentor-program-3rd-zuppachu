// hw1：印出星星
// 一次印一顆星，三顆星印三次

function printStars(n) {
  for (let i = 0; i < n; i += 1) {
    console.log('*');
  }
}
printStars(5);

/*
i=0, i<3 -> X -> i++, i=1
i=1, i<3 -> X -> i++, i=2
i=2, i<3 -> x -> i++, i=3
*/
