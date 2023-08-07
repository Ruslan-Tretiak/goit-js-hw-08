import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const framePlayer = document.querySelector('iframe');
const player = new Player(framePlayer);


const onPlay = function({seconds}) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
};
player.on('timeupdate', throttle(onPlay, 1000));
const storage = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(storage || 0);