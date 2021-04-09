import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import WeatherController from "./Controllers/WeatherController.js";
import TodosController from "./Controllers/TodosController.js";

class App {
  imageController = new ImageController();
  quoteController = new QuoteController();
  weatherController = new WeatherController();
  todosController = new TodosController();
}

window["app"] = new App();
