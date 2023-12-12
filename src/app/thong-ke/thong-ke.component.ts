import { Component, OnInit } from '@angular/core';
import { VideoDto } from '../video-dto';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';
import { UserDto } from '../user-dto';
import { CommentsService } from '../comments.service';


@Component({
  selector: 'app-thong-ke',
  templateUrl: './thong-ke.component.html',
  styleUrls: ['./thong-ke.component.css']
})
export class ThongKeComponent implements OnInit {
  myVideos: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService, private commentService: CommentsService) {
  }
  
  
  ngOnInit(): void {
          this.videoService.getVideosByUserId(this.userService.userIdnew).subscribe(response => {
            console.log(this.myVideos)
            this.myVideos = response
          })
    }
}
