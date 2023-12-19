import { Component } from '@angular/core';
import { VideoService } from '../video.service';
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {
  trendVideos: Array<VideoDto> = []

  constructor(private videoService: VideoService) {

    this.videoService.getVideosSortedByViewCount().subscribe(response => {
      this.trendVideos = response
    })

    
  }
  ngOnInit(): void {

  }
}
