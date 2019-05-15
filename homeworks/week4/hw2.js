const request = require('request');
const process = require('process');


if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (erro, response, body) => {
      const obj = JSON.parse(body);
      obj.forEach((el) => {
        console.log(`${el.id} ${el.name}`);
      });
    });
}

if (process.argv[2] === 'read') {
  request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (erro, response, body) => {
      const obj = JSON.parse(body);
      console.log(`${obj.id} : ${obj.name}`);
    });
}
