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
  img!: string;


  myVideos: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {
    this.userService.getUserById(this.userService.userIdnew).subscribe(data1 => {
      this.img = data1.image
    })
  }

  deleteVideo(id: string) {
    const isConfirmed = confirm("Bạn muốn xóa video?")
    if(isConfirmed) {
      this.videoService.deleteVideo(id).subscribe(data => {
        console.log("xác nhận xóa thành công")
        alert("Xác nhận xóa thành công!")
      })
  
      this.videoService.getVideosByUserId(this.userService.userIdnew).subscribe(response => {
        console.log(this.myVideos)
        this.myVideos = response
      })
    }
    else {
      alert("Không xóa video!")
    }
  }

}
