const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    const book = JSON.parse(body);
    book.forEach((el) => {
      console.log(`${el.id} ${el.name}`);
    });
  },
);
