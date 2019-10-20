import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IMovie } from '../shared/movie.model';
import { MoviesService } from '../shared/movies.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolverService implements Resolve<IMovie> {

  constructor(private ms: MoviesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IMovie> {
    return this.ms.getMovie(route.paramMap.get("id"))
  }
}

