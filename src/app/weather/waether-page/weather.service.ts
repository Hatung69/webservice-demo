import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    return this.http
      .get(
        "http://api.openweathermap.org/data/2.5/weather?id=1581188&units=metric&appid=923882b434d3764926f466e0985a2db2"
      )
      .pipe(catchError((err) => of`Catch error: ${err}`));
  }
}
