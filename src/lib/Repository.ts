export default interface Repository {
    id: number
    name: string
    description: string
    html_url: string
    topics: string[]
    // preview_image: string
    stars: number | 'N/A'
    views: number | 'N/A'
}