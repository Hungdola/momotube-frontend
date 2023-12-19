import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadVideoComponent } from './upload-video/upload-video.component';

import { NgxFileDropModule } from 'ngx-file-drop';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SaveVideoDetailComponent } from './save-video-detail/save-video-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import { MatChipsModule } from '@angular/material/chips';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { HotkeyModule } from 'angular2-hotkeys';

import { VideoPlayerComponent } from './video-player/video-player.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { KeycloakSecurityService } from './guards/keycloak-security.service';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeaturedComponent } from './featured/featured.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { CallbackComponent } from './callback/callback.component';
import { CommentComponent } from './comment/comment.component';
import { VideoCardSmallComponent } from './video-card-small/video-card-small.component';
import { SearchListVideoComponent } from './search-list-video/search-list-video.component';
import { VideoCardBigComponent } from './video-card-big/video-card-big.component';
import { MyVideosComponent } from './my-videos/my-videos.component';
import { VideoCardDeleteComponent } from './video-card-delete/video-card-delete.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
import { ThongKeCardComponent } from './thong-ke-card/thong-ke-card.component';
import { TagnameComponent } from './sidebar/tagname/tagname.component';
import { VideosUserSelectComponent } from './videos-user-select/videos-user-select.component';
import { VideoCauchuyenComponent } from './theloai/video-cauchuyen/video-cauchuyen.component';
import { VideoTreemComponent } from './theloai/video-treem/video-treem.component';
import { VideoBongdaComponent } from './theloai/video-bongda/video-bongda.component';
import { VideoHoahauComponent } from './theloai/video-hoahau/video-hoahau.component';
import { VideoSieunhanComponent } from './theloai/video-sieunhan/video-sieunhan.component';
import { VideoHaihuocComponent } from './theloai/video-haihuoc/video-haihuoc.component';
import { VideoTrinhdienComponent } from './theloai/video-trinhdien/video-trinhdien.component';
import { TrendingComponent } from './trending/trending.component';


export function kcFactory(kcService: KeycloakService) {
  return () => {
    kcService.init({
      config: {
        realm:"momotube-realm",
        clientId: "momotube-pkce-client",
        url: "http://localhost:8180"
      },
      
      initOptions: {
        onLoad: "check-sso",
        checkLoginIframe: true,
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
      // bearerExcludedUrls: ['/assets']
    })
  }
}

@NgModule({
  declarations: [
    AppComponent,
    UploadVideoComponent,
    HeaderComponent,
    SaveVideoDetailComponent,
    VideoDetailComponent,
    VideoPlayerComponent,
    HomeComponent,
    HistoryComponent,
    SubscriptionsComponent,
    LikedVideosComponent,
    SidebarComponent,
    FeaturedComponent,
    VideoCardComponent,
    CallbackComponent,
    CommentComponent,
    VideoCardSmallComponent,
    SearchListVideoComponent,
    VideoCardBigComponent,
    MyVideosComponent,
    VideoCardDeleteComponent,
    EditVideoComponent,
    ThongKeComponent,
    ThongKeCardComponent,
    TagnameComponent,
    VideosUserSelectComponent,
    VideoCauchuyenComponent,
    VideoTreemComponent,
    VideoBongdaComponent,
    VideoHoahauComponent,
    VideoSieunhanComponent,
    VideoHaihuocComponent,
    VideoTrinhdienComponent,
    TrendingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxFileDropModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    // OAuthModule.forRoot({
    //   resourceServer: {
    //     allowedUrls: ['http://localhost:8080/api'],
    //     sendAccessToken: true
    //   }
    // }),
    KeycloakAngularModule,
    OAuthModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HotkeyModule.forRoot()
  ],
  providers: [
    { provide: APP_INITIALIZER, deps: [KeycloakService], useFactory: kcFactory, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakSecurityService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }