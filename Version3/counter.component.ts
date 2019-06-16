import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="container">
      <app-increaser (increaseNum) = "increaseNum()"></app-increaser>
      <div class="counter">{{num}}</div>
      <app-decreaser (decreaseNum) = "decreaseNum()"></app-decreaser>
    </div>
  `,
  styles: [`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    margin: 20px auto;
    font-size: 24px;
    color: #3f51b5;
  }

  .counter {
    width: 50px;
    text-align: center;
  }
  `]
})
export class CounterComponent {
  num:number = 0;

  increaseNum() {
    this.num += 1;
  }

  decreaseNum() {
    if (!this.num) return;
    this.num -= 1;
  }
}
