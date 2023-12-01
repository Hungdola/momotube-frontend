import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { VideoDto } from 'src/app/video-dto';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-video-trinhdien',
  templateUrl: './video-trinhdien.component.html',
  styleUrls: ['./video-trinhdien.component.css']
})
export class VideoTrinhdienComponent {
  listVideo: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {
  }
  
  
  ngOnInit(): void {
          this.videoService.getVideosByTheloai("TRINHDIEN").subscribe(response => {
            this.listVideo = response
          })
    }
}
