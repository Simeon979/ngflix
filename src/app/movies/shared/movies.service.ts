import { Injectable } from '@angular/core';
import { IMovie } from './movie.model';
import { IMovieThumbnail } from '../movies-list/movie-thumbnail.model';
import { HttpClient } from '@angular/common/http';

import { of, Observable, forkJoin } from "rxjs"
import { tap, map, mergeMap, switchMap } from "rxjs/operators"

export interface IBaseData {
  baseUrl: string
  posterSizes: string[]
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseData: IBaseData

  constructor(private http: HttpClient) {
  }

  private getApiUrl = (path: string) => `https://api.themoviedb.org/3${path}?api_key=YOUR_API_KEY_HERE`

  getMovies = () : Observable<IMovieThumbnail[]> => {
    const url = this.getApiUrl("/movie/popular")
    const baseData$ = this.getBaseData()
    const moviesResult$ = this.http.get(url)
    return forkJoin([baseData$, moviesResult$]).pipe(
      map(([baseData, movieResult]) => {
        const imgUrl = `${baseData.baseUrl}${baseData.posterSizes[0]}`
        return movieResult["results"].map(movie => ({ 
          id: movie.id,
          title: movie.original_title, 
          poster: `${imgUrl}${movie.poster_path}`,
          release: new Date(movie.release_date)
        }))
      })
    )
  }

  getMovie(id): Observable<IMovie> {
    const url = this.getApiUrl(`/movie/${id}`)
    const baseData$ = this.getBaseData()
    const moviesResult$ = this.http.get(url)
    return forkJoin([baseData$, moviesResult$]).pipe(
      map(([baseData, movieResult]) => {
        const imgUrl = `${baseData.baseUrl}${baseData.posterSizes[0]}`
        return ({
          id: movieResult["id"],
          title: movieResult["original_title"],
          poster: `${imgUrl}${movieResult["poster_path"]}`,
          overview: movieResult["overview"],
          release: new Date(movieResult["release_date"]),
          runtime: movieResult["runtime"],
          genres: movieResult["genres"].map(genre => genre.name),
          prodCompanies: movieResult["production_companies"].map(company => company.name),
          status: movieResult["status"]
        })
      })
    )
  }

  getBaseData(): Observable<IBaseData> {
    if (this.baseData) return of(this.baseData)

    const url = this.getApiUrl("/configuration")
    return this.http.get(url)
      .pipe(
        map(result => ({
          baseUrl: result["images"]["base_url"],
          posterSizes: result["images"]["poster_sizes"]
        })),
        tap(result => { this.baseData = result; console.log(this.baseData) }),
      )
  }

}
