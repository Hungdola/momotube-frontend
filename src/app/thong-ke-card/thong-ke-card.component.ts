import { Component, Input } from '@angular/core';
import { VideoDto } from '../video-dto';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';
import { CommentsService } from '../comments.service';
import { CommentDto } from '../comment-dto';
@Component({
  selector: 'app-thong-ke-card',
  templateUrl: './thong-ke-card.component.html',
  styleUrls: ['./thong-ke-card.component.css']
})
export class ThongKeCardComponent {
  @Input()
  video!: VideoDto;
  commentDto: CommentDto[] = []
  // myVideos: Array<VideoDto> = []
  countComment: number = 0

  constructor(private videoService: VideoService, private userService: UserService, private commentService: CommentsService) {
    setTimeout(() => {
      console.log("video id nay la:",this.video.id)
  
        this.commentService.getAllComments(this.video.id).subscribe(data => {
          this.commentDto = data
          this.countComment = this.commentDto.length
          console.log(this.countComment)
        })
    }, 2000)
  }

}
