import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { weatherApi } from './AxiosService.js';

class WeatherService {
  async getWeather() {
    let res = await weatherApi.get();
    ProxyState.weather = new Weather(res.data);
  }

  changeTemp() {
    ProxyState.weather.checked = !ProxyState.weather.checked;
    ProxyState.weather = ProxyState.weather;
  }
}

export const weatherService = new WeatherService();
