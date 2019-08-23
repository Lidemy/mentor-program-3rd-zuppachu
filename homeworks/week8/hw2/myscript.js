/* eslint-disable no-alert */

const request = new XMLHttpRequest();
const requestPost = new XMLHttpRequest();
const posts = document.querySelector('.posts');
const btn = document.getElementById('btn');
const newInput = document.getElementById('input');

request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=desc', true);
request.send();

// 處理載入留言
request.addEventListener('load', () => {
  if (request.status >= 200 && request.status < 400) {
    const mesg = JSON.parse(request.responseText);
    for (let i = 0; i < mesg.length; i += 1) {
      const div = document.createElement('div');
      div.classList.add('post');
      div.innerHTML = `<h3># ${mesg[i].id}</h3>
      <div>${mesg[i].content}</div>`;
      posts.appendChild(div);
    }
  } else {
    console.log(request.status);
  }
});

request.onerror = function printError() {
  console.log('errer');
};

// 處理新增留言
btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (newInput.value !== '') {
    const data = `content=${newInput.value}`;
    requestPost.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
    requestPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    requestPost.send(data);
    newInput.value = '';
    posts.innerHTML = '';
    request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=desc', true);
    request.send();
  } else {
    alert('請輸入留言內容唷！');
  }
});
