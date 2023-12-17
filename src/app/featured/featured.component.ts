import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { VideoDto } from '../video-dto';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { UserDto } from '../user-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  featuredVideos: Array<VideoDto> = []
  userDto!: UserDto

  constructor(private videoService: VideoService, private keycloakService: KeycloakService, private userService: UserService) {
    
  }
  ngOnInit(): void {
    this.keycloakService.keycloakEvents$.subscribe((event) => {
      if (event.type === KeycloakEventType.OnAuthSuccess) {
        this.videoService.getAllVideos().subscribe(response => {
          // console.log("respone",response)
          this.featuredVideos = response.slice().reverse();
        })
        this.getCurrentUser()
      } 
    });

  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(data => {
      this.userDto = data;
      console.log("new id:",this.userDto.id)
      this.userService.userIdnew = this.userDto.id
      this.userService.listUserId = this.userDto.subscribedToUsers
    })
  }



}
