export interface VideoDto {
    id: string
    title: string
    description: string
    userId: string
    author: string
    tags: Array<string>
    videoUrl: string
    videoStatus: string
    theloaiVideo: string
    thumbnailUrl: string
    likeCount: number
    dislikeCount: number
    viewCount: number
}
