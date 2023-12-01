import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { VideoDto } from 'src/app/video-dto';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-video-bongda',
  templateUrl: './video-bongda.component.html',
  styleUrls: ['./video-bongda.component.css']
})
export class VideoBongdaComponent {
  listVideo: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {
  }
  
  
  ngOnInit(): void {
          this.videoService.getVideosByTheloai("BONGDA").subscribe(response => {
            this.listVideo = response
          })
    }
}
