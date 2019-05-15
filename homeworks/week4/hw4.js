const request = require('request');

request(
  {
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
      'Client-Id': 'tkqtnof7fpyuvhiwgz6w5onbusdn42',
    },
  },
  (error, response, body) => {
    const obj = JSON.parse(body);
    for (let i = 0; i < obj.data.length; i += 1) {
      console.log(obj.data[i].id, obj.data[i].name);
    }
  },
);
