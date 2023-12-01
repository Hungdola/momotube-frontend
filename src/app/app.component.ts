import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
// import { OAuthService } from 'angular-oauth2-oidc';
// import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube-clone-ui';

  // constructor(private kcService: KeycloakService, securityService: SecurityService) {
  // }

  // ngOnInit(): void {
  //   this.oidcSecurityService
  //     .checkAuth()
  //     .subscribe((loginResponse: LoginResponse) => {
  //       const { isAuthenticated} =
  //         loginResponse;
  //       /*...*/
  //     });  }

  // private configure() {
  //   this.oauthService.configure(authConfig)
  //   this.oauthService.loadDiscoveryDocumentAndTryLogin()
  // }
  // login() {
  //   this.kcService.login({
  //     redirectUri: window.location.origin
  //   })
  // }

  // logout() {
  //   this.kcService.logout(window.location.origin)
  // }
}



