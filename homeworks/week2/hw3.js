// hw3：反轉字串

function reverse(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }

  console.log(newStr);
}

reverse('hello');
reverse('yoyoyo');
reverse('1abc2');
reverse('1,2,3,2,1');
reverse('ABCDEF');

/*
i=2, 2>0, true => str[2]=3, i--
i=1, 1>0, true => str[1]=2, i--
i=0, 0=0, true => str[0]=1, i--

i= -1, 跳出
*/
