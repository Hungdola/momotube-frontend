export interface UserDto {
    id: string
    firstName: string
    lastName: string
    fullName: string
    emailAddress: string
    sub: string
    image: string
    subscribedToUsers : Array<string>
    subscribers : Array<string>
    videoHistory : Array<string>
    likedVideos: Array<string> 
    disLikedVideos: Array<string>
}
