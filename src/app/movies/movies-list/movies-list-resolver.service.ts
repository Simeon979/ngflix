import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IMovie } from '../shared/movie.model';
import { MoviesService } from '../shared/movies.service';
import { Observable } from 'rxjs';
import { IMovieThumbnail } from '../movies-list/movie-thumbnail.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesListResolverService implements Resolve<{ heading: string, movies: IMovieThumbnail[] }> {

  constructor(private ms: MoviesService) { }

  resolve(): Observable<{ heading: string, movies: IMovieThumbnail[] }> {
    return this.ms.getMovies()
      .pipe( 
        map(movies => ({ heading: "All movies", movies}))
      )
  }
}
