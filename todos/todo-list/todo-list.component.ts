import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul *ngFor="let todo of Todos">
      <li id = "{{todo.id}}" [ngStyle]="{ 'text-decoration': todo.completed ?'line-through' : 'none'}">
      <input type="checkbox" (click)="update(todo)" [checked]="todo.completed">
      {{todo.content}}
      <button (click)="removeTodo(todo)">X</button>
      </li>
    </ul>
  `,
  styles: []
})
export class TodoListComponent {
  @Input() Todos: Todo[];
  @Output() updateTodo = new EventEmitter();
  @Output() remove = new EventEmitter();

  update(todo) {
    this.updateTodo.emit(todo);
  }
  removeTodo(todo) {
    this.remove.emit(todo);
  }
}
