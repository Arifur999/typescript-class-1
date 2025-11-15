//oop abstraction
// interface
interface MediaPlayer{
    play():void;
    pause():void;
    stop():void;
}


class MusicPlayer implements MediaPlayer{
play() {
    console.log(`play music`);
}
pause() {
    console.log(`music paused`);
}
stop() {
    console.log(`music stop`);
    
}
}

const myPlayer=new MusicPlayer();
myPlayer.play()
myPlayer.pause()
myPlayer.stop()



// abstract class




