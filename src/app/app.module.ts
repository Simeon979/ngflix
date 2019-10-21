import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateFnsModule } from "ngx-date-fns"
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesService } from './movies/shared/movies.service';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieThumbnailComponent } from "./movies/movies-list/movie-thumbnail.component";
import { MoviesListResolverService } from './movies/movies-list/movies-list-resolver.service';
import { MovieDetailsResolverService } from './movies/movie-details/movie-details-resolver.service';
import { FavoriteMoviesListResolverService } from './movies/movies-list/favorite-movies-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    MovieThumbnailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DateFnsModule.forRoot()
  ],
  providers: [
    MoviesService,
    MoviesListResolverService,
    MovieDetailsResolverService,
    FavoriteMoviesListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
