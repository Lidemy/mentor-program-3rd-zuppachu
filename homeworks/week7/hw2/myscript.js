/* eslint-disable no-alert */
const formContents = document.querySelectorAll('.formContent');
const required = document.querySelectorAll('.required');
// const text = document.querySelectorAll('input[type="text"]');
// const checkBox = document.querySelectorAll('.checkbox ~ input');

// 檢查必填題目
function checkQuestions() {
  for (let i = 0; i <= required.length; i += 1) {
    if (required[i].value === '') {
      formContents[i].classList.add('wrong');
    } else {
      formContents[i].classList.remove('wrong');
    }
  }
}
document.querySelector('form').addEventListener('click', checkQuestions, false);

// 檢查表單項目
function result() {
  checkQuestions();
  for (let i = 0; i < formContents.length; i += 1) {
    // 如果包含沒填的必填項目，跳出
    if (formContents[i].classList.contains('wrong')) {
      alert('請檢查欄位～');
      // e.preventDefault();
      return false;
    }
  }
  alert('成功送出！');
  return true;
  /*
    console.log(`電子郵件地址： ${text[0].value}`);
    console.log(`暱稱： ${text[1].value}`);
    if (checkBox[0].checked) {
      console.log(`報名類型： ${checkBox[0]}`);
    } else {
      console.log(`報名類型：${checkBox[1]}`);
    }
    console.log(`現在的職業： ${text[2].value}`);
    console.log(`怎麼知道此計畫的？： ${text[3].value}`);
    console.log(`是否有程式相關背景： ${text[4].value}`);
    console.log(`其他： ${text[5].value}`);
    */
}

document.querySelector('#submitBtn').addEventListener('click', result, false);
