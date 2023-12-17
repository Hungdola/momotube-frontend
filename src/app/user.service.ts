import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userIdnew!: string
  userIdSelect= "655398e73a306906c1da4b3b" //dùng để gọi đến các channel mà user đang đăng nhập đã đăng ký
  listUserId: Array<string> = []

  private userId: string = ''

  constructor(private httpClient: HttpClient) { }

  subscribeToUser(userId: string): Observable<boolean> {
    return this.httpClient.post<boolean>("http://localhost:8080/api/user/subscribe/"+userId, null)
  }

  unSubscribeUser(userId: string): Observable<boolean> {
    return this.httpClient.post<boolean>("http://localhost:8080/api/user/unSubscribe/"+userId, null)
  }



  registerUser() {
    return this.httpClient.get("http://localhost:8080/api/user/register", {responseType: "text"})
    .subscribe(data => {
      this.userId = data;
    })
  }

  getUserId(): string {
    return this.userId;
  }

  getCurrentUser(): Observable<UserDto> {
    return this.httpClient.get<UserDto>("http://localhost:8080/api/user/current")
  }

  getUsersByListIds(ids: Array<string>):Observable<Array<UserDto>> {
    const params = ids.join('&ids=');
    return this.httpClient.get<Array<UserDto>>("http://localhost:8080/api/user/byIds?ids="+params)
  }

  getUserById(userId: string): Observable<UserDto> {
    return this.httpClient.get<UserDto>("http://localhost:8080/api/user/"+userId)
  }
}
