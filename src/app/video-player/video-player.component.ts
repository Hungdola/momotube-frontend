import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { VgApiService  } from '@videogular/ngx-videogular/core';
import { Waterm } from '../waterm';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input()
  videoUrlAndWater: Waterm | undefined

  vgApi: VgApiService | undefined;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  @ViewChild('watermark') watermark!: ElementRef;

  
  constructor(private hotkeysService: HotkeysService) {}

  onPlayerReady(api: VgApiService) {
    this.vgApi = api;
  }

  ngOnInit(): void {
    console.log("link: ",this.videoUrlAndWater?.videoUrl)

    this.hotkeysService.add(new Hotkey('space', (event: KeyboardEvent): boolean => {
      this.togglePlayPause();
      return false; // Ngăn chặn sự kiện mặc định của trình duyệt
    }));

    // Hotkeys for seeking with arrow keys
    this.hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
      this.seekForward();
      return false;
    }));

    this.hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
      this.seekBackward();
      return false;
    }));

    // Hotkeys for seeking with J and L keys
    this.hotkeysService.add(new Hotkey('j', (event: KeyboardEvent): boolean => {
      this.seekBackward();
      return false;
    }));

    this.hotkeysService.add(new Hotkey('l', (event: KeyboardEvent): boolean => {
      this.seekForward();
      return false;
    }));

    // Hotkeys for adjusting volume with arrow up and arrow down keys
    this.hotkeysService.add(new Hotkey('up', (event: KeyboardEvent): boolean => {
      this.adjustVolume(0.1); // Increase volume by 10%
      return false;
    }));

    this.hotkeysService.add(new Hotkey('down', (event: KeyboardEvent): boolean => {
      this.adjustVolume(-0.1); // Decrease volume by 10%
      return false;
    }));
  }

  ngOnDestroy() {
    this.hotkeysService.reset();
  }



  togglePlayPause() {
    if (this.vgApi && this.vgApi.getDefaultMedia()) {
      // Toggle play/pause based on the state of the media element
      const mediaElement = this.vgApi.getDefaultMedia().elem;
      if (mediaElement.paused) {
        mediaElement.play();
      } else {
        mediaElement.pause();
      }
    }
  }

  seekForward() {
    this.seek(5); // Adjust the value (in seconds) based on your preference
  }

  seekBackward() {
    this.seek(-5); // Adjust the value (in seconds) based on your preference
  }

  seek(seconds: number) {
    // Check if vgApi is initialized and the video player is ready
    if (this.vgApi && this.vgApi.getDefaultMedia()) {
      // Seek forward or backward based on the provided seconds value
      this.vgApi.getDefaultMedia().currentTime += seconds;
    }
  }

  adjustVolume(change: number) {
    // Check if vgApi is initialized and the video player is ready
    if (this.vgApi && this.vgApi.getDefaultMedia()) {
      // Adjust volume based on the provided change value
      const currentVolume = this.vgApi.volume;
      const newVolume = Math.min(1, Math.max(0, currentVolume + change));
      this.vgApi.volume = newVolume;
    }
  }

  ngAfterViewInit(): void {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      // Sử dụng setTimeout để đảm bảo rằng video đã được nạp và có kích thước
      setTimeout(() => this.setupWatermarkMovement(), 0);
    }
  }

  setupWatermarkMovement(): void {
    const watermarkElement = this.watermark.nativeElement;
    const videoElement = this.videoPlayer.nativeElement;

    setInterval(() => {
      if (videoElement && watermarkElement) {
        const newPositionX = Math.random() * (videoElement.clientWidth - watermarkElement.clientWidth);
        const newPositionY = Math.random() * (videoElement.clientHeight - watermarkElement.clientHeight);

        watermarkElement.style.transform = `translate(${newPositionX}px, ${newPositionY}px)`;
      }
    }, 2000);
  }

}
