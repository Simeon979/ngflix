import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IMovie } from '../shared/movie.model';
import { MoviesService } from '../shared/movies.service';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { FavoriteMoviesService } from '../movies-list/favorite-movies.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolverService implements Resolve<{isFav: boolean, movie: IMovie}> {

  constructor(private ms: MoviesService, private fms: FavoriteMoviesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<{isFav: boolean, movie: IMovie}> {
    const id = route.paramMap.get("id")
    const isFav$ = this.fms.isFav(id)
    const movie$ = this.ms.getMovie(id)
    return forkJoin([isFav$, movie$]).pipe(
      map(([isFav, movie]) => ({ isFav, movie }))
    )
  }
}

