import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {KeycloakService } from 'keycloak-angular';
import { Observable, combineLatest, from, mergeMap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeycloakSecurityService implements HttpInterceptor {
  constructor(private keycloakService: KeycloakService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.keycloakService.isLoggedIn()).pipe(
      switchMap((loggedIn) => {
        if (loggedIn) {
          return from(this.keycloakService.getToken()).pipe(
            switchMap((token) => {
              console.log("TOKEN: ",  token)
              const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
              return next.handle(authReq);
            })
          );
        } else {
          return next.handle(req);
        }
      })
    );
  }

}

