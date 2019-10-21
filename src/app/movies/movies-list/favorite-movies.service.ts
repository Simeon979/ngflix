import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  constructor() { }

  getFavMovies() : Observable<string[]>{
    let allFavs: string[] = []
    for (let i = 0; i < window.sessionStorage.length; i++) {
      allFavs.push(window.sessionStorage.getItem(window.sessionStorage.key(i)))
    }
    return of(allFavs)
  }

  addFavMovie(id): Observable<boolean>{
    const idStr = `${id}`
    window.sessionStorage.setItem(idStr, idStr)
    return of(true)
  }

  removeFavMovie(id): Observable<boolean>{
    window.sessionStorage.removeItem(`${id}`)
    return of(false)
  }

  isFav(id) :Observable<boolean>{
    return of(!!window.sessionStorage.getItem(`${id}`))
  }

  toggleFavMovie(id): Observable<boolean>{
    return this.isFav(id).pipe(
      switchMap(favExist => favExist ? this.removeFavMovie(id) : this.addFavMovie(id))
    )
  }
}
