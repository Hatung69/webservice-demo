import { WeatherService } from "./weather.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-waether-page",
  templateUrl: "./waether-page.component.html",
  styleUrls: ["./waether-page.component.css"],
})
export class WaetherPageComponent implements OnInit {
  weatherData: any;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.loaddata();
  }

  loaddata() {
    this.weatherService.getWeather().subscribe((data) => {
      this.weatherData = data;
    });
  }
}
