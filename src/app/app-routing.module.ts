import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesListResolverService } from './movies/movies-list/movies-list-resolver.service';
import { MovieDetailsResolverService } from "./movies/movie-details/movie-details-resolver.service"


const routes: Routes = [
  { path: "movies", component: MoviesListComponent, resolve: { movies: MoviesListResolverService } },
  { path: "movies/:id", component: MovieDetailsComponent, resolve: { movie: MovieDetailsResolverService } },
  { path: "", redirectTo: "/movies", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
