import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesListResolverService } from './movies/movies-list/movies-list-resolver.service';
import { MovieDetailsResolverService } from "./movies/movie-details/movie-details-resolver.service"
import { FavoriteMoviesListResolverService } from './movies/movies-list/favorite-movies-list-resolver.service';
import { MoviesSearchListResolverService } from './movies/movies-list/movies-search-list-resolver.service';


const routes: Routes = [
  { path: "movies", component: MoviesListComponent, resolve: { moviesDetails: MoviesListResolverService} },
  { path: "movies/favorites", component: MoviesListComponent, resolve: { moviesDetails: FavoriteMoviesListResolverService} },
  { path: "movies/search", component: MoviesListComponent, resolve: { moviesDetails: MoviesSearchListResolverService }, runGuardsAndResolvers: "paramsOrQueryParamsChange"},
  { path: "movies/:id", component: MovieDetailsComponent, resolve: { movieDetails: MovieDetailsResolverService } },
  { path: "", redirectTo: "/movies", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
