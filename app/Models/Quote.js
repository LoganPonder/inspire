export default class Quote {
  constructor({author, content}) {
    this.author = author;
    this.content = content;
  }

  get Template() {
    return /*html*/ `
        <div class="p-2">
            <p class="lead">${this.content}</p>
            <small>${this.author}</small>
        </div>
        `;
  }
}
