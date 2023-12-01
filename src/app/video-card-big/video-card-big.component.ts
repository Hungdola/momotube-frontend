import { Component, Input } from '@angular/core';
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-video-card-big',
  templateUrl: './video-card-big.component.html',
  styleUrls: ['./video-card-big.component.css']
})
export class VideoCardBigComponent {
  @Input()
  video!: VideoDto;

  constructor() {}

}
