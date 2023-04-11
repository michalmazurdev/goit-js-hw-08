const throttle = require('lodash.throttle');
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function updateTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
player.on('timeupdate', _.throttle(updateTime, 1000));

// player.on('timeupdate', function (data) {
//   localStorage.setItem('videoplayer-current-time', data.seconds);
// });

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {});
