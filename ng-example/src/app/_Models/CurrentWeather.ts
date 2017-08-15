export class CurrentWeather implements MyApp.Models.ICurrentWeather {
    cityName: string;
    temp: number;
    weather: object;
    date: string;

    constructor(obj: Object) {
        this.cityName = obj['city_name'];
        this.temp = obj['temp'];
        this.weather = obj['weather'];
        this.date = obj['datetime'];
    }

}