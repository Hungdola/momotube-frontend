import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube-clone-ui';

  constructor(private oauthService: OAuthService) {
    this.configure()
  }

  // ngOnInit(): void {
  //   this.oidcSecurityService
  //     .checkAuth()
  //     .subscribe((loginResponse: LoginResponse) => {
  //       const { isAuthenticated} =
  //         loginResponse;
  //       /*...*/
  //     });  }

  private configure() {
    this.oauthService.configure(authConfig)
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
  }
  login() {
    this.oauthService.initCodeFlow()
  }

  logout() {
    this.oauthService.logOut()
  }
}



