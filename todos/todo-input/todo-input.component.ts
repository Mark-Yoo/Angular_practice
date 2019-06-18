import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input type="text" (keyup.enter)="addTodo(input)" #input>
  `,
  styles: []
})
export class TodoInputComponent {
  @Output() add = new EventEmitter();

  addTodo(content) {
    this.add.emit(content.value);
    content.value='';
  }
}
