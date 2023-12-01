import { Component } from '@angular/core';
import { VideoDto } from '../video-dto';
import { VideoService } from '../video.service';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  historyVideos: Array<VideoDto> = []

  constructor(private videoService: VideoService, private keycloakService: KeycloakService, private route: ActivatedRoute) {
    // this.keycloakService.keycloakEvents$.subscribe((event) => {
    //   if (event.type === KeycloakEventType.OnAuthSuccess) {
        this.videoService.getVideosHistory().subscribe(response => {
          this.historyVideos = response
        })
    //   }
    // });
    
  }
  ngOnInit(): void {

  }

  loadData(id: String) {
    
  }
}
