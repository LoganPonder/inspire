export default class Weather {
  constructor({main, name}) {
    this.city = name;
    this.temp = Math.floor(main.temp);
    this.fahrenheit = Math.floor(((main.temp - 273.15)*1.8)+32);
    this.celsius = Math.floor(main.temp - 273.15)
  }

  get Template() {
    return /*html*/ `
        <div class="">
            <h4 class="temp">${this.temp} | ${this.fahrenheit} | ${this.celsius}</h4>
            <h6>${this.city}</h6>
        </div>
        `;
  }
}
