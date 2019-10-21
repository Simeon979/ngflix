import { Injectable } from '@angular/core';
import { FavoriteMoviesService } from './favorite-movies.service';
import { IMovieThumbnail } from './movie-thumbnail.model';
import { Resolve } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { MoviesService, movieToMovieThumbnail } from '../shared/movies.service';
import { mergeMap, switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesListResolverService implements Resolve<{ heading: string, movies: IMovieThumbnail[] }>{

  constructor(private fms: FavoriteMoviesService, private ms: MoviesService) { }

  resolve() :Observable<{ heading: string, movies: IMovieThumbnail[] }>{
    return this.fms.getFavMovies()
      .pipe(
        map(favIds => favIds.map(favId => this.ms.getMovie(favId))),
        switchMap(favIds$ => forkJoin(favIds$)),
        map(favMovies => favMovies.map(favMovie => movieToMovieThumbnail(favMovie))),
        map(favMoviesThumbnail => ({ heading: "Favorites", movies: favMoviesThumbnail }))
      )
  }
}
