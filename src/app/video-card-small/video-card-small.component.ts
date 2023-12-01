import { Component, Input } from '@angular/core';
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-video-card-small',
  templateUrl: './video-card-small.component.html',
  styleUrls: ['./video-card-small.component.css']
})
export class VideoCardSmallComponent {
  @Input()
  video!: VideoDto;

  constructor() {}
}
