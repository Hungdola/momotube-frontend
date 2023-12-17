import { Component, Input, OnInit } from '@angular/core';
import { VideoDto } from '../video-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

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
  ngOnInit(): void {
  }


}
