import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';


const routes: Routes = [
  { path: "movies", component: MoviesListComponent },
  { path: "movies/:id", component: MovieDetailsComponent },
  { path: "", redirectTo: "/movies", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
