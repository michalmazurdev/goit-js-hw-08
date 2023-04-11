const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('play', function (data) {
  console.log('play');
  // console.log('played the video!');
});

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
