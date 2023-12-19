import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { SaveVideoDetailComponent } from './save-video-detail/save-video-detail.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HistoryComponent } from './history/history.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { FeaturedComponent } from './featured/featured.component';
import { CallbackComponent } from './callback/callback.component';
import { SearchListVideoComponent } from './search-list-video/search-list-video.component';
import { MyVideosComponent } from './my-videos/my-videos.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
import { VideosUserSelectComponent } from './videos-user-select/videos-user-select.component';
import { VideoCauchuyenComponent } from './theloai/video-cauchuyen/video-cauchuyen.component';
import { VideoTreemComponent } from './theloai/video-treem/video-treem.component';
import { VideoBongdaComponent } from './theloai/video-bongda/video-bongda.component';
import { VideoHoahauComponent } from './theloai/video-hoahau/video-hoahau.component';
import { VideoSieunhanComponent } from './theloai/video-sieunhan/video-sieunhan.component';
import { VideoHaihuocComponent } from './theloai/video-haihuoc/video-haihuoc.component';
import { VideoTrinhdienComponent } from './theloai/video-trinhdien/video-trinhdien.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {path: '', component: HomeComponent, 
  children: [
    {path: '', component: FeaturedComponent},
    {path: 'subscriptions', component: SubscriptionsComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'liked-videos', component: LikedVideosComponent},
    {path: 'search', component: SearchListVideoComponent},
    {path: 'my-videos', component: MyVideosComponent},
    {path: 'thong-ke', component: ThongKeComponent},
    {path: 'videos-user-select', component: VideosUserSelectComponent},
    {path: 'videos-cauchuyen', component: VideoCauchuyenComponent},
    {path: 'videos-treem', component: VideoTreemComponent},
    {path: 'videos-bongda', component: VideoBongdaComponent},
    {path: 'videos-hoahau', component: VideoHoahauComponent},
    {path: 'videos-sieunhan', component: VideoSieunhanComponent},
    {path: 'videos-haihuoc', component: VideoHaihuocComponent},
    {path: 'videos-trinhdien', component: VideoTrinhdienComponent},
    {path: 'trending', component: TrendingComponent}
  ]
},
  {path: 'upload-video', component: UploadVideoComponent},
  {path: 'save-video-details/:videoId', component: SaveVideoDetailComponent},
  {path: 'video-detail/:videoId', component: VideoDetailComponent},
  {path: 'callback', component: CallbackComponent},
  {path: 'edit-video/:videoId', component: EditVideoComponent}
  // , canActivate: [AuthGuard], data: {roles: ['USER']}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
