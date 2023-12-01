import { KeycloakService } from 'keycloak-angular';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, switchMap } from 'rxjs';
import { UploadVideoResponse } from './upload-video/upload-video-response';
import { VideoDto } from './video-dto';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  sharedValue!: string;
  sharedValue2: string = this.sharedValue

  constructor(private httpClient: HttpClient, private keycloakService: KeycloakService) { }

  // intercept(
  //   req: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   return from(this.keycloakService.getToken()).pipe(
  //     switchMap((token) => {
  //       const authReq = req.clone({
  //         setHeaders: { Authorization: `Bearer ${token}` },
  //       });
  //       return next.handle(authReq);
  //     })
  //   )
  // }

  uploadVideo(fileEntry: File): Observable<UploadVideoResponse> {
    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)

    //http post call to upload the video
    return this.httpClient.post<UploadVideoResponse>("http://localhost:8080/api/videos/", formData)

  }

  uploadThumbnail(fileEntry: File, videoId: string): Observable<string> {
    const formData = new FormData()
    formData.append('file', fileEntry, fileEntry.name)
    formData.append('videoId', videoId)

    //HTTP POST call to upload thumbnail
    return this.httpClient.post("http://localhost:8080/api/videos/thumbnail", formData, {
      responseType: 'text'
    })

  }

  getVideo(videoId: string) : Observable<VideoDto> {
        return this.httpClient.get<VideoDto>("http://localhost:8080/api/videos/"+ videoId)
  }

  saveVideo(videoMetadata: VideoDto) : Observable<VideoDto> {
    return this.httpClient.put<VideoDto>("http://localhost:8080/api/videos", videoMetadata);
  }

  getAllVideos(): Observable<Array<VideoDto>> {
    return this.httpClient.get<Array<VideoDto>>("http://localhost:8080/api/videos")
  }

  getSearchVideos(keySearch: String): Observable<Array<VideoDto>> {
    return this.httpClient.get<Array<VideoDto>>("http://localhost:8080/api/videos?"+"&searchKey="+keySearch)
  }

  likeVideo(videoId: string): Observable<VideoDto> {
    return this.httpClient.post<VideoDto>("http://localhost:8080/api/videos/"+videoId+"/like", null)
  }

  disLikeVideo(videoId: string): Observable<VideoDto> {
    return this.httpClient.post<VideoDto>("http://localhost:8080/api/videos/" + videoId + "/dislike", null);
  }

  getVideosHistory(): Observable<Array<VideoDto>>  {
    return this.httpClient.get<Array<VideoDto>>("http://localhost:8080/api/videos/history")
  }

  getVideosLiked(): Observable<Array<VideoDto>>  {
    return this.httpClient.get<Array<VideoDto>>("http://localhost:8080/api/videos/liked")
  }

  getVideosByUserId(userId: string) :Observable<Array<VideoDto>> {
    return this.httpClient.get<Array<VideoDto>>("http://localhost:8080/api/videos/user/"+userId)
  }

  deleteVideo(videoId: string) {
    return this.httpClient.delete("http://localhost:8080/api/videos/"+videoId)
  }

  getVideosSubscribe(userIds: Array<string>):Observable<Array<VideoDto>> {
    const params = userIds.join('&userIds=');
    return this.httpClient.get<Array<VideoDto>>("http://localhost:8080/api/videos/byuserids?userIds=" + params)
  }

  getVideosSortedByViewCount(): Observable<Array<VideoDto>> {
    return this.httpClient.get<Array<VideoDto>>("http://localhost:8080/api/videos/sorted-by-view-count")
  }
  
  getVideosByTheloai(theloaiVideo: string) : Observable<Array<VideoDto>> {
    return this.httpClient.get<Array<VideoDto>>("http://localhost:8080/api/videos/theloai/"+theloaiVideo)
  }
}
