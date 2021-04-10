export default class Todo {
  constructor({id, description}) {
      this.id = id;
    this.description = description;
  }

  get Template() {
    return /*html*/ `
        <div class="d-flex justify-content-between align-items-center py-2">
        <input class="ml-5" type="checkbox"><p class="mb-0">${this.description}</p><i class="fas fa-backspace mr-5" onclick="app.todosController.deleteTodo('${this.id}')"></i>
        </div>
        `;
  }
}
