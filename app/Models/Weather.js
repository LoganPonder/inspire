export default class Weather {
  constructor({main, name}) {
    this.city = name;
    this.temp = Math.floor(main.temp);
    this.fahrenheit = Math.floor(((main.temp - 273.15)*1.8)+32);
    this.celsius = Math.floor(main.temp - 273.15)
    this.checked = true;
  }
// go back to here
  get Template() {
    return /*html*/ `
        <div class="pr-0">
        <h4 onclick="app.weatherController.changeTemp()" class="temp display-2 mb-0" id="temp">${this.checked ? this.fahrenheit : this.celsius}°</h4>
            <p class="display-4 pt-0 mt-0">${this.city}</p>
        </div>
        `;
  }
}
