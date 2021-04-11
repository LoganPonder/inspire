export default class Quote {
  constructor({author, content}) {
    this.author = author;
    this.content = content;
  }

  get Template() {
    return /*html*/ `
        <div class="p-2">
            <p class="lead quote-content">${this.content}</p>
            <small class="quote-author font-italic">-${this.author}</small>
        </div>
        `;
  }
}
