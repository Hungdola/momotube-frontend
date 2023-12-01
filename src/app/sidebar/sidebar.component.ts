import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserDto } from '../user-dto';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  userSubcribeList: Array<UserDto> = []

  constructor(private userService: UserService, private keycloakService: KeycloakService) {
    // this.keycloakService.keycloakEvents$.subscribe((event) => {
    //   if (event.type === KeycloakEventType.OnAuthSuccess) {
      setTimeout(() => {
        console.log("id la:", userService.listUserId)
        this.userService.getUsersByListIds(userService.listUserId).subscribe(data => {
        this.userSubcribeList = data
        console.log(this.userSubcribeList)
        })

      }, 3000)
    } 
  // });
  // }

  ngOnInit(): void {
  }


  magnify:string = "assets/images/magnify.svg";
  mic:string = "assets/images/mic_black_24dp.svg";
  uploadVideo:string = "assets/images/video-plus.svg";
  apps:string = "assets/images/apps.svg";
  bell:string = "assets/images/bell.svg";
  menu:string = "assets/images/menu_black_24dp.svg";
  logo:string = "assets/images/logo.png";

  // getCurrentUser() {
  //   this.userService.getCurrentUser().subscribe(data => {
  //     this.userDto = data;
  //     console.log("new id:",this.userDto.id)
  //     this.userService.userIdnew = this.userDto.id
  //   })
  // }

}
