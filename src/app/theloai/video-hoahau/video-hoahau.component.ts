import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { VideoDto } from 'src/app/video-dto';
import { VideoService } from 'src/app/video.service';

@Component({
  selector: 'app-video-hoahau',
  templateUrl: './video-hoahau.component.html',
  styleUrls: ['./video-hoahau.component.css']
})
export class VideoHoahauComponent {
  listVideo: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {
  }
  
  
  ngOnInit(): void {
          this.videoService.getVideosByTheloai("HOAHAU").subscribe(response => {
            this.listVideo = response
          })
    }
}
