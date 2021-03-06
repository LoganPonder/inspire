import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

//Private
function _draw() {
    let quote = ProxyState.quote;
    document.getElementById('quote').innerHTML = quote.Template;
}

//Public
export default class QuoteController {
  constructor() {
    ProxyState.on("quote", _draw);
    

    this.getQuote();
  }

  async getQuote() {
      try {
          await quoteService.getQuote(); 
      } catch(error) {
          console.error(error);
      }
  }
}


