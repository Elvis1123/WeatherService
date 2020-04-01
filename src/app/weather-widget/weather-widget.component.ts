import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherResponse } from '../models/weatherresponse.model';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  public currentWeather: WeatherResponse;
  @Input() city;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCurrentWeather(this.city)
    .subscribe(response => this.currentWeather = response);
  }

}
