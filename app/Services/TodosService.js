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
    // console.log(ProxyState.todos);
    let todo = ProxyState.todos.find(t => t.id == id);
    console.log(todo);
    await todoApi.delete(todo.id);
    console.log('hi, delete service');
    ProxyState.todos = ProxyState.todos.filter(t => t.id != id);
  }
}

export const todosService = new TodosService();
