import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VideoService } from '../video.service';
import { VideoDto } from '../video-dto';
import { UserDto } from '../user-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDto!: UserDto

  value!:string;
  searchVideos: Array<VideoDto> = []

  magnify:string = "assets/images/magnify.svg";
  mic:string = "assets/images/mic_black_24dp.svg";
  uploadVideo:string = "assets/images/video-plus.svg";
  apps:string = "assets/images/apps.svg";
  bell:string = "assets/images/bell.svg";
  menu:string = "assets/images/menu_black_24dp.svg";
  logo:string = "assets/images/logo.png";

  isAuthenticated: boolean = false
  accessToken: string | undefined;
  searchkeyword!: string

  constructor(public securityService: SecurityService, private keycloakService: KeycloakService, private userService: UserService,
     private router: Router, private formBuilder: FormBuilder, private videoService: VideoService, ) {
  }
  ngOnInit(): void {
    this.keycloakService.keycloakEvents$.subscribe((event) => {
      if (event.type === KeycloakEventType.OnAuthSuccess) {
        this.getCurrentUser()
      } 
    });
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(data => {
      this.userDto = data;
    })
  }


  async login() {
    await this.securityService.kcService.login({
      redirectUri: window.location.origin
    })
  }

  logout() {
    this.securityService.kcService.logout(window.location.origin).then(() => this.keycloakService.clearToken());
  }

  searchVideo(value: string) {
    this.value = value;
    this.videoService.sharedValue = value
    console.log(this.videoService.sharedValue)
    this.router.navigateByUrl("/search")
  }

  // sendDataToB() {
  //   this.videoService.sharedValue = this.value
  //   console.log(this.videoService.sharedValue)

  // }

  routSearch() {
    this.router.navigateByUrl("/search")
  }

  routUpload() {
    this.router.navigateByUrl("/upload-video")
  }




}

