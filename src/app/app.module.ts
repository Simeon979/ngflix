import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateFnsModule } from "ngx-date-fns"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesService } from './movies/shared/movies.service';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieThumbnailComponent } from "./movies/movies-list/movie-thumbnail.component";

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    MovieThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateFnsModule.forRoot()
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
