import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../shared/movie.model';
import { MoviesService } from '../shared/movies.service';
import { ActivatedRoute } from '@angular/router';
import { FavoriteMoviesService } from '../movies-list/favorite-movies.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styles: []
})
export class MovieDetailsComponent implements OnInit {
  movie:IMovie
  isFavorite: boolean

  constructor(private movies: MoviesService, private favMovies: FavoriteMoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data["movieDetails"]["movie"]
    this.isFavorite = this.route.snapshot.data["movieDetails"]["isFav"]
  }

  handleFavoriteClick() {
    this.favMovies.toggleFavMovie(this.movie.id).subscribe(isFav => this.isFavorite = isFav)
  }

}
