import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { SaveVideoDetailComponent } from './save-video-detail/save-video-detail.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const routes: Routes = [
  {path: '', component: UploadVideoComponent},
  {path: 'save-video-details/:videoId', component: SaveVideoDetailComponent},
  {path: 'video-detail/:videoId', component: VideoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
