import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { weatherApi } from './AxiosService.js';

class WeatherService {
  async getWeather() {
    let res = await weatherApi.get();
    ProxyState.weather = new Weather(res.data);
  }
}

export const weatherService = new WeatherService();
