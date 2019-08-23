const request = new XMLHttpRequest();
const btn = document.querySelector('.btn');
let offset = 0;

request.open('GET', 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&limit=20', true);
// setRequestHeader (header,value) => 請求添加 HTTP 頭 （規定名稱，規定的值）
request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
request.setRequestHeader('Client-ID', 'tkqtnof7fpyuvhiwgz6w5onbusdn42');
request.send(null);

// 可比較 request.addEventListener('load', () => {})
request.onload = () => {
  const channel = JSON.parse(request.responseText).streams;
  // .streams 在 twich api example resoponse 內。
  let streamerChannel = '';
  for (let i = 0; i < channel.length; i += 1) {
    streamerChannel += `
        <div class="stream">
            <a href="${channel[i].channel.url}"><img class="streamPic" src="${channel[i].preview.medium}"></a>
            <div class="streamer">
                <img class="streamerPic" src="${channel[i].channel.logo}">
                <ul class="streamerDetail">
                    <li>${channel[i].channel.status}</li>
                    <li>${channel[i].channel.display_name}</li>
                </ul>
            </div>
        </div>
        `;
  }
  // channel[i].channel.logo 取 logo 資料
  // channel[i].preview.medium 取 畫面 資料
  document.querySelector('.content').innerHTML = streamerChannel;
};

request.onerror = function printError() {
  console.log('error!');
};

btn.addEventListener('click', () => {
  offset += 20;
  request.open('GET', `https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&limit=20&offset=${offset}`, true); // 注意中間那串運用 ``
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.setRequestHeader('Client-ID', 'tkqtnof7fpyuvhiwgz6w5onbusdn42');
  request.send();
});
