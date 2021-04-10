import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { todoApi } from '../Services/AxiosService.js'

class TodosService {
  async getAllTodos() {
    let res = await todoApi.get('');
    ProxyState.todos = res.data.map(t => new Todo(t));
  }

  async addTodo(newTodo) {
    let res = await todoApi.post('/', newTodo)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)];
  }

  async deleteTodo(id) {
    let todo = ProxyState.todos.find(t => t.id == id);
    await todoApi.delete(todo.id);
    ProxyState.todos = ProxyState.todos.filter(t => t.id != id);
  }

  async toggle(id) {
    let todo = ProxyState.todos.find(t => t.id == id);
    console.log(todo);
    todo.completed = !todo.completed;
    let res = await todoApi.put(todo.id, todo)
    console.log(res.data);
    todo = res.data;
  }
}

export const todosService = new TodosService();
