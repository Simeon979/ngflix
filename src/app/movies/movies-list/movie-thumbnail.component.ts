import { Component, Input } from "@angular/core";
import { IMovieThumbnail } from './movie-thumbnail.model';

@Component({
    selector: "movie-thumbnail",
    templateUrl: "./movie-thumbnail.component.html",
    styles: [``]
})

export class MovieThumbnailComponent {
    @Input() movie: IMovieThumbnail
    constructor() {

    }

}