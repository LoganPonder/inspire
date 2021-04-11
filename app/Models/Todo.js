export default class Todo {
  constructor({id, description, completed = false}) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  get Template() {
    return /*html*/ `
        <div class="d-flex justify-content-between align-items-center py-2">
        <input class="ml-5" type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.todosController.toggle('${this.id}')"><p class="mb-0 todo-item">${this.description}</p><i class="fas fa-backspace mr-5" onclick="app.todosController.deleteTodo('${this.id}')"></i>
        </div>
        `;
  }
}
