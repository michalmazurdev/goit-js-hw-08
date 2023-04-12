import * as _ from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', function (data) {
  _.throttle(
    localStorage.setItem('videoplayer-current-time', data.seconds),
    1000
  );
  console.log(data);
});
player.on('timeupdate', function (data) {
  console.log(data);
});
// player.on('timeupdate', function (data) {
//   localStorage.setItem('videoplayer-current-time', data.seconds);
// });

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {});
