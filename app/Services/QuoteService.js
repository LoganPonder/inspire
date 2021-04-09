import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { quoteApi } from '../Services/AxiosService.js';

class QuoteService {
  async getQuote() {
    let res = await quoteApi.get();
    ProxyState.quote = new Quote(res.data);
  }
}

export const quoteService = new QuoteService();
