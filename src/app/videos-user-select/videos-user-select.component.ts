import { Component } from '@angular/core';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-videos-user-select',
  templateUrl: './videos-user-select.component.html',
  styleUrls: ['./videos-user-select.component.css']
})
export class VideosUserSelectComponent {
  listVideoUserSelect: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {
  }
  
  
  ngOnInit(): void {
    console.log(this.userService.userIdSelect)
          this.videoService.getVideosByUserId(this.userService.userIdSelect).subscribe(response => {
            this.listVideoUserSelect = response
          })
    }
}
