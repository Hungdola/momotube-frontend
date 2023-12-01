import { Component, Input } from '@angular/core';
import { VideoDto } from '../video-dto';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-thong-ke-card',
  templateUrl: './thong-ke-card.component.html',
  styleUrls: ['./thong-ke-card.component.css']
})
export class ThongKeCardComponent {
  @Input()
  video!: VideoDto;


  myVideos: Array<VideoDto> = []

  constructor(private videoService: VideoService, private userService: UserService) {}

}
