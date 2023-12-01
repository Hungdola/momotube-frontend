import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { VideoDto } from 'src/app/video-dto';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-video-cauchuyen',
  templateUrl: './video-cauchuyen.component.html',
  styleUrls: ['./video-cauchuyen.component.css']
})
export class VideoCauchuyenComponent {
  listVideo: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {
  }
  
  
  ngOnInit(): void {
          this.videoService.getVideosByTheloai("CAUCHUYEN").subscribe(response => {
            this.listVideo = response
          })
    }
}
