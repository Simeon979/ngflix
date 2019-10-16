export interface IMovie {
    id: number
    title: string
    poster?: string
    overview?: string
    release: Date
    runtime?: number
    genres: string[]
    prodCompanies: string[]
    status: string
}