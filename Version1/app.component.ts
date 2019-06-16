import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <body>
      <div class="container">
        <button class="increase" (click) = "increaseNum()" >+</button>
        <div class="counter">{{num}}</div>
        <button class="decrease" (click) = "decreaseNum()">-</button>
      </div>
    </body>
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

  button {
    padding: 5px 10px;
    font-size: 24px;
    border-radius: 5px;
    color: #3f51b5;
    border-color: #3f51b5;
    outline: none;
    cursor: pointer;
  }

  .counter {
    width: 50px;
    text-align: center;
  }
  `]
})
export class AppComponent {
  num:number = 0;

  increaseNum() {
    this.num += 1;
  }

  decreaseNum() {
    if (!this.num) return;
    this.num -= 1;
  }
}
