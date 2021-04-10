export default class Image {
  constructor({large_url, copyright ='2021', site = 'Unsplash'}) {
        this.url = large_url;
        this.copyright = copyright;
        this.site = site;
  }

  get Template() {
    return /*html*/ `
        <small class="italic">Image from ${this.site}/${this.copyright}</small>
        `;
  }
}
