import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { IMovieThumbnail } from './movie-thumbnail.model';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styles: ['']
})
export class MoviesListComponent implements OnInit {

  movies: IMovieThumbnail[]
  constructor(private movieService: MoviesService) {

   }

  ngOnInit() {
    this.movies = this.movieService.getMovies()
  }

}
