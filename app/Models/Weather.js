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
        <div class="">
        <h4 onclick="app.weatherController.changeTemp()" class="temp display-2" id="temp">${this.checked ? this.fahrenheit : this.celsius}°</h4>
            <h6 class="display-4">${this.city}</h6>
        </div>
        `;
  }
}
