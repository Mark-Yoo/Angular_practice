import { Component } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todos',
  template: `
    <app-todo-input (add)="addTodo($event)"></app-todo-input>
    <app-todo-list
    [Todos]="Todos"
    (remove)="removeTodo($event)"
    (updateTodo)="update($event)">
    </app-todo-list>
  `,
  styles: []
})
export class TodosComponent {
  Todos: Todo[] = [
    { id: 1, content: "HTML", completed: false },
    { id: 2, content: "CSS", completed: true },
    { id: 3, content: "Javascript", completed: false }
  ]
  generateID() {
    return [...this.Todos].length ? Math.max(...this.Todos.map(todo => todo.id + 1)) : 1;
  }

  addTodo(content: string) {
    this.Todos = [...this.Todos, { id: this.generateID(), content, completed: false }];
    
  }

  removeTodo(todo) {
    this.Todos = this.Todos.filter((item) => todo.id !== item.id);
  }

  update(todo) {
    this.Todos.forEach((item) => {
      if (todo.id === item.id) {
        todo.completed = !todo.completed
      } 
    })
  }
}
