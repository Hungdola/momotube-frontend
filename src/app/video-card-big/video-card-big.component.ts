import { Component, Input } from '@angular/core';
import { VideoDto } from '../video-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-video-card-big',
  templateUrl: './video-card-big.component.html',
  styleUrls: ['./video-card-big.component.css']
})
export class VideoCardBigComponent {
  @Input()
  video!: VideoDto;
  img!: string

  constructor(private userService: UserService) {
    setTimeout(()=> {
      this.userService.getUserById(this.video.userId).subscribe(data1 => {
        this.img = data1.image
      })

    }, 1000)
  }

}
