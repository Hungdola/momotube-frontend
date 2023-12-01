import { Component, Input } from '@angular/core';
import { VideoDto } from '../video-dto';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-video-card-delete',
  templateUrl: './video-card-delete.component.html',
  styleUrls: ['./video-card-delete.component.css']
})
export class VideoCardDeleteComponent {
  @Input()
  video!: VideoDto;


  myVideos: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {}

  deleteVideo(id: string) {
    alert("Xác nhận xóa video")
    this.videoService.deleteVideo(id).subscribe(data => {
      console.log("xác nhận xóa thành công")
    })

    this.videoService.getVideosByUserId(this.userService.userIdnew).subscribe(response => {
      console.log(this.myVideos)
      this.myVideos = response
    })
  }

}
