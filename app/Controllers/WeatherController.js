import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

//Private
function _draw() {
    let weather = ProxyState.weather;
    document.getElementById('weather').innerHTML = weather.Template;
}

//Public
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", _draw);
    
    this.getWeather();
  }

  async getWeather() {
      try {
          await weatherService.getWeather();
      }catch(error) {
          console.error(error);
      }
  }
}

function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  hour = updateTime(hour);
  min = updateTime(min);
  document.getElementById("clock").innerText = hour + " : " + min; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}
currentTime();