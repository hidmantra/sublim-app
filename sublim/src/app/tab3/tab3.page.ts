import { Component } from '@angular/core';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
 // constructor(){}
  videoOpts : VideoOptions ;
  constructor(private videoPlayer: VideoPlayer) {

  }
  public playVideo(){
    this.videoOpts = {volume : 1.0};
    this.videoPlayer.play('file:///android_asset/www/cat.mp4').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });    
}
public stopPlayingVideo(){
    this.videoPlayer.close();
}
}
