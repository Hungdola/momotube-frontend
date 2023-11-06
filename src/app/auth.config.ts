import {AuthConfig} from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8180/auth/realms/momotube-realm',
  redirectUri: window.location.origin,
  clientId: 'youtubeclone-pkce-client',
  responseType: 'code',
  strictDiscoveryDocumentValidation: false,
  scope: 'openid profile email offline_access',
}