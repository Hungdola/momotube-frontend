import { Component, Input } from '@angular/core';
import { VideoDto } from '../video-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-video-card-small',
  templateUrl: './video-card-small.component.html',
  styleUrls: ['./video-card-small.component.css']
})
export class VideoCardSmallComponent {
  @Input()
  video!: VideoDto;

  constructor(private reloadService: ReloadService) {}

  reloadComponent() {
    this.reloadService.triggerReload();
  }
}
