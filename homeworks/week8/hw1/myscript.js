/* eslint-disable no-alert */
/* eslint-disable default-case */
const request = new XMLHttpRequest();
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.prizeBtn');
const title = document.querySelector('.title');
const des = document.querySelector('.des');
const pic = document.querySelector('.pic');

request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const response = request.responseText;
    const json = JSON.parse(response);
    const result = json.prize;

    switch (result) {
      case 'FIRST': {
        pic.classList.remove('hidden');
        pic.src = 'https://image.flaticon.com/icons/svg/1077/1077903.svg';
        des.innerText = '日本東京來回雙人遊！';
        title.innerText = '恭喜你中頭獎!';
        wrapper.style.background = '#bdf0ee';
        btn.innerText = '再試一次';
        break;
      }

      case 'SECOND': {
        pic.classList.remove('hidden');
        pic.src = 'https://image.flaticon.com/icons/svg/1838/1838552.svg';
        des.innerText = '90 吋電視一台！';
        title.innerText = '二獎!';
        wrapper.style.background = '#bdf0ee';
        btn.innerText = '再試一次';
        break;
      }

      case 'THIRD': {
        pic.classList.remove('hidden');
        pic.src = 'https://image.flaticon.com/icons/svg/37/37922.svg';
        des.innerText = '知名 YouTuber 簽名握手會入場券一張，bang！';
        title.innerText = '三獎!';
        wrapper.style.background = '#cffbd1';
        btn.innerText = '再試一次';
        break;
      }

      case 'NONE': {
        pic.classList.remove('hidden');
        pic.src = '';
        des.innerText = '運氣不好～';
        title.innerText = '銘謝惠顧！';
        wrapper.style.background = 'white';
        btn.innerText = '再試一次';
        break;
      }

      default: {
        alert('系統不穩，再次一次。');
        break;
      }
    }
  } else {
    alert('系統不穩，再次一次。');
  }
};

btn.addEventListener('click', () => {
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', 'true');
  request.send();
});
