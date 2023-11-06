import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean = false

  constructor(private oauthService: OAuthService) {

  }
  ngOnInit(): void {
    // this.oidcSecurityService.isAuthenticated$.subscribe(({isAuthenticated}) => {
    //   this.isAuthenticated = isAuthenticated
    // })
  }

  // login() {
  //   this.oidcSecurityService.authorize();
  // }

  // logout() {
  //   this.oidcSecurityService
  //     .logoffAndRevokeTokens() //sẽ xóa luôn token
  //     .subscribe((result) => console.log(result));
  // }
  login() {
    this.oauthService.initCodeFlow()
  }

  logout() {
    this.oauthService.logOut()
  }

}
