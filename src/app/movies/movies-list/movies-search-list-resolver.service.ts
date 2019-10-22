import { Injectable } from '@angular/core';
import { IMovieThumbnail } from './movie-thumbnail.model';
import { ActivatedRouteSnapshot, Resolve, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../shared/movies.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesSearchListResolverService implements Resolve<{ heading: string, movies: IMovieThumbnail[] }>{

  constructor(private ms: MoviesService, private route: ActivatedRoute) { }

  resolve(route: ActivatedRouteSnapshot) :Observable<{ heading: string, movies: IMovieThumbnail[] }>{
    const searchTerm = route.queryParamMap.get("q") || ""
    return this.ms.getSearchedMovies(searchTerm)
      .pipe(
        map(movies => ({ heading: `showing results for: ${searchTerm}`, movies}))
      )
  }
}