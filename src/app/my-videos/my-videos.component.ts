import { Component, OnInit } from '@angular/core';
import { VideoDto } from '../video-dto';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';
import { UserDto } from '../user-dto';

@Component({
  selector: 'app-my-videos',
  templateUrl: './my-videos.component.html',
  styleUrls: ['./my-videos.component.css']
})
export class MyVideosComponent implements OnInit {
  myVideos: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {
  }
  
  
  ngOnInit(): void {
          this.videoService.getVideosByUserId(this.userService.userIdnew).subscribe(response => {
            console.log(this.myVideos)
            this.myVideos = response
          })
    }

    
}
