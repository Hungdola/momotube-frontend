import { UserDto } from './../user-dto';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { UserService } from '../user.service';
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  userDto!: UserDto

  suggestVideos: Array<VideoDto> = []

  videoId !: string
  videoUrl !: string
  videoTitle !: string
  videoDescription !: string
  userId !: string
  tags: Array<string> = []
  videoAvailable: boolean = false
  likeCount: number = 0
  dislikeCount: number = 0
  viewCount: number = 0
  showSubscribeButton: boolean = true;
  showUnSubscribeButton: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
             private videoService: VideoService,
              private keycloakService: KeycloakService,
              private userService: UserService,
              ) {
                
    // this.keycloakService.keycloakEvents$.subscribe((event) => {
    //   if (event.type === KeycloakEventType.OnAuthSuccess) {
        // setTimeout(() => {
          
          
          // }, 1500)
          
          //   }
          // });
          
        }
        ngOnInit(): void {
          this.videoId = this.activatedRoute.snapshot.params['videoId'];//gắn id trên route vào biến videoId
          this.videoService.getVideo(this.videoId).subscribe(data => {
            this.videoUrl = data.videoUrl;
            this.videoTitle = data.title
            this.videoDescription = data.description
            this.tags = data.tags
            this.videoAvailable = true
            this.likeCount = data.likeCount
            this.dislikeCount = data.dislikeCount
            this.viewCount = data.viewCount
            this.userId = data.userId;
            console.log("value:",data)
          })
      
          this.videoService.getVideosSortedByViewCount().subscribe(response => {
            this.suggestVideos = response
          })
          
  }

  likeVideo() {
    this.videoService.likeVideo(this.videoId).subscribe(data => {
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
    })
  }

  disLikeVideo() {
    this.videoService.disLikeVideo(this.videoId).subscribe(data => {
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
    })
  }

  subscribeToUser() {
    // let userId = this.videoSub.userId;
    console.log("đăng ký thành công:", this.userId)
    this.userService.subscribeToUser(this.userId).subscribe(data => {
      this.showUnSubscribeButton = true;
      this.showSubscribeButton = false;
    })

    this.userService.getCurrentUser().subscribe(data => {
      this.userService.listUserId = this.userDto.subscribedToUsers
    })
  }

  unSubscribeToUser() {
    console.log("hủy đăng ký thành công")
    this.userService.unSubscribeUser(this.userId).subscribe(data => {
      this.showUnSubscribeButton = false;
      this.showSubscribeButton = true;
    })

    this.userService.getCurrentUser().subscribe(data => {
      this.userService.listUserId = this.userDto.subscribedToUsers
    })
  }


}
