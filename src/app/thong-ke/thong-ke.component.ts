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
  totalView = 0
  totalLike = 0
  totalDislike = 0

  constructor(private videoService: VideoService, private userService: UserService, private commentService: CommentsService) {
  }
  
  
  ngOnInit(): void {
          this.videoService.getVideosByUserId(this.userService.userIdnew).subscribe(response => {
            console.log(this.myVideos)
            this.myVideos = response

            this.totalView = response.reduce((total, obj) => total + obj.viewCount, 0);
            this.totalLike = response.reduce((total, obj) => total + obj.likeCount, 0);
            this.totalDislike = response.reduce((total, obj) => total + obj.dislikeCount, 0);
          })
    }
}
