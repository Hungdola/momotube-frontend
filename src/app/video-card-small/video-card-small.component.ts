import { Component, Input } from '@angular/core';
import { VideoDto } from '../video-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { ReloadService } from '../reload.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-video-card-small',
  templateUrl: './video-card-small.component.html',
  styleUrls: ['./video-card-small.component.css']
})
export class VideoCardSmallComponent {
  @Input()
  video!: VideoDto;
  img!: string

  constructor(private reloadService: ReloadService, private userService: UserService) {
      setTimeout(()=> {
        this.userService.getUserById(this.video.userId).subscribe(data1 => {
          this.img = data1.image
        })
  
      }, 1000)
  }

  reloadComponent() {
    this.reloadService.triggerReload();
  }
}
