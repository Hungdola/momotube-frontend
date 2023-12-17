import { Component, Input } from '@angular/core';
import { UserDto } from 'src/app/user-dto';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-tagname',
  templateUrl: './tagname.component.html',
  styleUrls: ['./tagname.component.css']
})
export class TagnameComponent {
  @Input()
  userSub!: UserDto;

  constructor(private userService: UserService) {
    // setTimeout(() => {
    //   console.log(this.userSub.id)
    //   this.userService.userIdSelect = this.userSub.id
    //   console.log("id đang tìm là: ", this.userService.userIdSelect)

    // }, 2000)
  }

  onclick() {
    console.log(this.userSub.id)
      this.userService.userIdSelect = this.userSub.id
      console.log("id đang tìm là: ", this.userService.userIdSelect)
  }
  


}
