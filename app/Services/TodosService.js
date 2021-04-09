import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { todoApi } from '../Services/AxiosService.js'

class TodosService {
  async getAllTodos() {
    let res = await todoApi.get('');
    ProxyState.todos = res.data.map(t => new Todo(t));
  }

  async addTodo(newTodo) {
    let res = await todoApi.post('', newTodo)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)];
  }
}

export const todosService = new TodosService();
