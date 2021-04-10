import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

//Private
function _draw() {
  let todos = ProxyState.todos;
  let template = '';
  todos.forEach(t => template += t.Template)
  document.getElementById('todo-list').innerHTML = template;
}

//Public
export default class TodosController {
  constructor() {
    ProxyState.on("todos", _draw);

    this.getAllTodos();
    _draw();
  }

  async getAllTodos() {
    try {
      await todosService.getAllTodos();
    }catch(error) {
      console.error(error);
    }
  }

  async addTodo() {
    window.event.preventDefault();
    let form = window.event.target;
    let newTodo = {
      description: form.description.value
    }
    form.reset();
    try {
      await todosService.addTodo(newTodo);
    } catch(error) {
      console.error(error);
    }
  }

  async deleteTodo(id) {
    try {
      await todosService.deleteTodo(id);
    }catch(error) {
      console.error(error);
    }
  }
}
