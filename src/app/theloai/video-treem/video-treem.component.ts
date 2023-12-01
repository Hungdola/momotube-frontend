import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { VideoDto } from 'src/app/video-dto';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-video-treem',
  templateUrl: './video-treem.component.html',
  styleUrls: ['./video-treem.component.css']
})
export class VideoTreemComponent {
  listVideo: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {
  }
  
  
  ngOnInit(): void {
          this.videoService.getVideosByTheloai("TREEM").subscribe(response => {
            this.listVideo = response
          })
    }
}
