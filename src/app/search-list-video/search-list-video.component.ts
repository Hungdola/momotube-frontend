import { Component, OnInit } from '@angular/core';
import { VideoDto } from '../video-dto';
import { VideoService } from '../video.service';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-search-list-video',
  templateUrl: './search-list-video.component.html',
  styleUrls: ['./search-list-video.component.css']
})
export class SearchListVideoComponent implements OnInit {
  searchVideos: Array<VideoDto> = []

  constructor(private videoService: VideoService, private keycloakService: KeycloakService) {
    console.log("vui: ",this.videoService.sharedValue)
    // this.keycloakService.keycloakEvents$.subscribe((event) => {
    //   if (event.type === KeycloakEventType.OnAuthSuccess) {
        this.videoService.getSearchVideos(this.videoService.sharedValue).subscribe(response => {
          console.log(this.searchVideos)
          this.searchVideos = response
        })
    //   }
    // });
    
  }
  ngOnInit(): void {

  }
}
