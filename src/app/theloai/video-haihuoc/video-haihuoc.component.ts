import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { VideoDto } from 'src/app/video-dto';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-video-haihuoc',
  templateUrl: './video-haihuoc.component.html',
  styleUrls: ['./video-haihuoc.component.css']
})
export class VideoHaihuocComponent {
  listVideo: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {
  }
  
  
  ngOnInit(): void {
          this.videoService.getVideosByTheloai("HAIHUOC").subscribe(response => {
            this.listVideo = response
          })
    }
}
