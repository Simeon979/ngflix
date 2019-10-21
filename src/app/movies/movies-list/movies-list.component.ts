import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { IMovieThumbnail } from './movie-thumbnail.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styles: ['']
})
export class MoviesListComponent implements OnInit {

  movies: IMovieThumbnail[]
  heading: string
  constructor(private movieService: MoviesService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.heading = this.route.snapshot.data["moviesDetails"]["heading"]
    this.movies = this.route.snapshot.data["moviesDetails"]["movies"]
  }

}
