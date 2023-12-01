import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { Injectable } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  profile?: KeycloakProfile
  public accessToken: any;

  constructor(public kcService: KeycloakService) {
    this.init()
   }

   init() {
    this.kcService.keycloakEvents$.subscribe({
      next: (e) => {
        if( e.type == KeycloakEventType.OnAuthSuccess) {
          this.kcService.loadUserProfile().then(profile => {
            this.profile = profile
            // console.log(profile)
            // this.handleLoginSuccess();
          })
        
        }
      }
    })
   }

   hasRoleIn(roles:string[]):boolean {
    let userRoles = this.kcService.getUserRoles()
    for(let role of roles) {
      if(userRoles.includes(role)) return true
    } return false
   }

}


