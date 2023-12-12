import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { VideoService } from './../video.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ActivatedRoute } from '@angular/router';
import { VideoDto } from '../video-dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user.service';
import { UserDto } from '../user-dto';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {
  userDto!: UserDto

  saveVideoDetailsForm: FormGroup
  title: FormControl = new FormControl()
  description: FormControl = new FormControl()
  videoStatus: FormControl = new FormControl()
  theloaiVideo: FormControl = new FormControl()

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const; //Kết hợp tất cả lại với nhau, dòng mã đang
    // xác định một mảng chỉ đọc có tên là SeparatorKeysCodes với hai phần tử, trong đó các phần tử có
    // thể là mã khóa cho phím Enter và phím Dấu phẩy. as const đảm bảo rằng TypeScript hiểu các phần 
    //tử này dưới dạng hằng số với các kiểu chữ cụ thể của chúng.
  tags: string[] = [];
  selectedFile!: File
  selectedFileName =''
  videoId = ''
  fileSelected = false
  videoUrl!: string
  thumbnailUrl!: string;
    accessToken!: string;
    videoAvailable: boolean = false


    userId!: string
    likeCount!: number
    dislikeCount!: number
    viewCount!: number

    titledata!: string
    descriptiondata!: string
    videoStatusdata!: string
    theloaiVideodata!: string
  
  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService, private matSnackbar: MatSnackBar, private userService: UserService){

            this.videoId = this.activatedRoute.snapshot.params['videoId'];//gắn id trên route vào biến videoId
            this.videoService.getVideo(this.videoId).subscribe(data => {
              this.videoUrl = data.videoUrl
              this.thumbnailUrl = data.thumbnailUrl
              this.userId = data.userId
              this.likeCount = data.likeCount
              this.dislikeCount = data.dislikeCount
              this.viewCount = data.viewCount
              this.tags = data.tags
              this.videoAvailable = true

              this.titledata = data.title
              this.descriptiondata = data.description
              this.videoStatusdata = data.videoStatus
              this.theloaiVideodata = data.theloaiVideo
            })

      this.saveVideoDetailsForm = new FormGroup({
        title: this.title,
        description: this.description,
        videoStatus: this.videoStatus,
        theloaiVideo: this.theloaiVideo

      })

      
  
  
  
  }
    ngOnInit(): void {
      setTimeout(() => {
        console.log("title: ",this.titledata)
        console.log("video url: ",this.videoUrl)
        this.saveVideoDetailsForm.patchValue({
          'title': this.titledata,
          'description': this.descriptiondata,
          'videoStatus': this.videoStatusdata,
          'theloaiVideo': this.theloaiVideodata
        })

      }, 1000)
      this.getCurrentUser()
    }
  
    getCurrentUser() {
      this.userService.getCurrentUser().subscribe(data => {
        this.userDto = data;
      })
    }
  
  announcer = inject(LiveAnnouncer);
  
  // add(event: MatChipInputEvent): void {
  //     const value = (event.value || '').trim();
  //     // Add our tag
  //     if (value) {
  //       this.tags.push(value);
  //     }
  //     // Clear the input value
  //     event.chipInput!.clear();
  // }
  
  // remove(value: string): void {
  //     const index = this.tags.indexOf(value);
  
  //     if (index >= 0) {
  //       this.tags.splice(index, 1);
  //       this.announcer.announce(`Removed ${value}`);
  //     }
  // }
  
  // onFileSelected($event: Event) {
  //   //@ts-ignore: chú thích này nó có thể bỏ qua tất cả các lỗi kiểm tra
  //   this.selectedFile = event.target.files[0];
  //   this.selectedFileName = this.selectedFile.name
  //   this.fileSelected = true
  // }
  
  // onUpload() {
  //       this.videoService.uploadThumbnail(this.selectedFile, this.videoId)
  //       .subscribe(data => {
  //         this.matSnackbar.open("thumbnail Updated Successfully", "OK")
  //        })
  // }
  
  saveVideo() {
    //call video service to make a http call our backend 
    const videoMetadata: VideoDto = {
      "id": this.videoId,
      "title": this.saveVideoDetailsForm.get('title')?.value,
      "description": this.saveVideoDetailsForm.get('description')?.value,
      "userId": this.userDto.id,
      "author": this.userDto.fullName,
      "tags": this.tags,
      "videoStatus": this.saveVideoDetailsForm.get('videoStatus')?.value,
      "theloaiVideo": this.saveVideoDetailsForm.get('theloaiVideo')?.value,
      "videoUrl": this.videoUrl,
      "thumbnailUrl": this.thumbnailUrl,
      "likeCount": this.likeCount,
        "dislikeCount": this.dislikeCount,
        "viewCount": this.viewCount
    }

        this.videoService.saveVideo(videoMetadata).subscribe(data => {
          this.matSnackbar.open("Video metadata Updated Successfully", "OK")
        })

  }
}
