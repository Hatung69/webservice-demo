import { MovieService } from "./../service/movie.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-page",
  templateUrl: "./movie-page.component.html",
  styleUrls: ["./movie-page.component.css"],
})
export class MoviePageComponent implements OnInit {
  listMoviePopular: any[] = new Array();
  numPage: number = 0;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loaddata();
  }

  loaddata() {
    this.numPage += 1;
    console.log("load=" + this.numPage);
    this.movieService.getListMoviePopular(this.numPage).subscribe((data) => {
      this.listMoviePopular = data["results"];
    });
  }

  preLoadData() {
    console.log("vào preload=" + this.numPage);
    if (this.numPage == 1) {
      return;
    } else {
      this.numPage -= 1;
    }
    console.log("reload=" + this.numPage);
    this.movieService.getListMoviePopular(this.numPage).subscribe((data) => {
      this.listMoviePopular = data["results"];
    });
  }
}
