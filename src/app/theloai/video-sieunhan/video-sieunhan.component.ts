import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { VideoDto } from 'src/app/video-dto';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-video-sieunhan',
  templateUrl: './video-sieunhan.component.html',
  styleUrls: ['./video-sieunhan.component.css']
})
export class VideoSieunhanComponent {
  listVideo: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {
  }
  
  
  ngOnInit(): void {
          this.videoService.getVideosByTheloai("SIEUNHAN").subscribe(response => {
            this.listVideo = response
          })
    }
}
