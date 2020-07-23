import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getListMoviePopular(numPage: number): Observable<any[]> {
    return this.http
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=2095bd0318698391f857eb654556bf7c&language=en-US&page=" +
          numPage
      )
      .pipe(catchError((err) => of`Catch error: ${err}`));
  }
}
