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

//idea
abstract class MediaPlayer1 {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

//implement
class MyPlayer1 extends MediaPlayer1 {
  play() {
    console.log("play 1 music");
  }
  pause() {
    console.log("pause 1 music");
  }
  stop() {
    console.log("stop 1 music");
  }
}

const player = new MyPlayer1();

player.play();
player.pause();
player.stop();


