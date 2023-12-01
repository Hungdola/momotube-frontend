import { Component } from '@angular/core';
import { VideoDto } from '../video-dto';
import { VideoService } from '../video.service';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-liked-videos',
  templateUrl: './liked-videos.component.html',
  styleUrls: ['./liked-videos.component.css']
})
export class LikedVideosComponent {
  likedVideos: Array<VideoDto> = []

  constructor(private videoService: VideoService, private keycloakService: KeycloakService) {
    // this.keycloakService.keycloakEvents$.subscribe((event) => {
    //   if (event.type === KeycloakEventType.OnAuthSuccess) {
        this.videoService.getVideosLiked().subscribe(response => {
          this.likedVideos = response
        })
    //   }
    // });
    
  }
  ngOnInit(): void {

  }
}
