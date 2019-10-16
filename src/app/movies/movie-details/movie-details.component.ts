import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../shared/movie.model';
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styles: []
})
export class MovieDetailsComponent implements OnInit {
  movie:IMovie

  constructor(private movies: MoviesService) { }

  ngOnInit() {
    this.movie = this.movies.getMovie()
  }

}
