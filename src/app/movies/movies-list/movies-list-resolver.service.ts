import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IMovie } from '../shared/movie.model';
import { MoviesService } from '../shared/movies.service';
import { Observable } from 'rxjs';
import { IMovieThumbnail } from '../movies-list/movie-thumbnail.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesListResolverService implements Resolve<IMovieThumbnail[]> {

  constructor(private ms: MoviesService) { }

  resolve(): Observable<IMovieThumbnail[]> {
    return this.ms.getMovies()
  }
}
