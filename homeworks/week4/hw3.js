const request = require('request');
const process = require('process');

// list = 印出前 20 本
if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      const obj = JSON.parse(body);
      obj.forEach((el) => {
        console.log(`${el.id} ${el.name}`);
      });
    });
}

// read = 輸出 id 數的書名
if (process.argv[2] === 'read') {
  request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (erro, response, body) => {
      const obj = JSON.parse(body);
      console.log(`ID is ${obj.id} : ${obj.name}`);
    });
}

// delete = 刪除 id 數的書
if (process.argv[2] === 'delete') {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    () => {
      // const obj = JSON.parse(body);
      console.log(`You deleted a book ID: ${process.argv[3]}`);
    });
  /*
    console.log(`You deleted a book ID: ${process.argv[3]} ${obj.name}`);
    想要印出書名，這樣的寫法印出 undefined，why?
    */
}

// update = 更新資訊
if (process.argv[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: process.argv[4],
      },
    },
    (erro, response, body) => {
      const obj = JSON.parse(body);
      console.log(`Updated ID ${obj.id} to ${obj.name}`);
    },
  );
}

// create = 新增一書
if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: process.argv[3],
      },
    },
    (erro, response, body) => {
      const obj = JSON.parse(body);
      console.log(`Created a book ID is ${obj.id} ${obj.name}`);
    },
  );
}
