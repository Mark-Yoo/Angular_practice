import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decreaser',
  template: `
    <button class="decrease" (click) = "decreaseNum.emit()">-</button>
  `,
  styles: [` 
  button {
    padding: 5px 10px;
    font-size: 24px;
    border-radius: 5px;
    color: #3f51b5;
    border-color: #3f51b5;
    outline: none;
    cursor: pointer;
  }
  `]
})
export class DecreaserComponent {
  @Output() decreaseNum = new EventEmitter<void>();

}
