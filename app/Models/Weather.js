export default class Weather {
  constructor({main, name, weather}) {
    this.city = name;
    this.temp = Math.floor(main.temp);
    this.fahrenheit = Math.floor(((main.temp - 273.15)*1.8)+32);
    this.celsius = Math.floor(main.temp - 273.15)
    this.checked = true;
    this.icon = weather[0].icon;
  }
// go back to here
  get Template() {
    return /*html*/ `
        <div class="pr-0 d-flex flex-column justify-content-center">
          <div class="temp-data d-flex justify-content-end">
            <img src="http://openweathermap.org/img/wn/${this.icon}.png" class="align-self-start">
            <h4 onclick="app.weatherController.changeTemp()" class="temp display-3 mb-0" id="temp">${this.checked ? this.fahrenheit : this.celsius}°</h4>
          </div>
          <p class="city pt-0 mt-0">${this.city}</p>
        </div>
        `;
  }
}
