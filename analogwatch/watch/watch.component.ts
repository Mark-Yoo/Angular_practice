import { Component } from '@angular/core';

@Component({
  selector: 'app-watch',
  template: `
    <div class="stop-watch">
      <div class="display">{{minute < 10 ? '0'+minute : minute}}:{{second < 10 ? '0'+second : second}}:{{milisec < 10 ? '0'+milisec : milisec}}</div>
      <button class="control" (click)="runStop()">Start</button>
    </div>
  `,
  styles: [`
    .stop-watch {
      font-family: 'Source Code Pro', monospace;
      text-align: center;
      font-size: 3em;
      padding: 30px;
    }
  
    .control {
      width: 300px;
      padding: 5px;
      margin-top: 15px;
      font-size: 36px;
      font-weight: bold;
      border: 2px solid #f44336;
      border-radius: 4px;
      cursor: pointer;
      outline: none;
    }
  
    .control:hover {
      background: #f44336;
      color: aliceblue;
    }
  `]
})
export class WatchComponent {
  milisec = 0;
  second = 0;
  minute = 0;
  toggleFunction: boolean = true;
  intervalF: any;

  runWatch() {
    if (this.toggleFunction) {
      this.intervalF = setInterval(() => {
        // milisec가 99초보다 작을 때 1씩 더해주기
        if (this.milisec < 99) {
          this.milisec++;
          // milisec가 99초 일 때 second가 1증가, milisec는 0으로 초기화
        } else if (this.milisec = 99) {
          this.second++
          this.milisec = 0;
          // second가 59초 일 때 minute이 1증가, second는 0으로 초기화
        } else if (this.second = 59) {
          this.minute++
        }
      }, 10);
    } 
  }

  stop() {
    if (!this.toggleFunction) {
      clearInterval(this.intervalF);
    }
  }

  runStop() {
    if (this.toggleFunction) {
      this.runWatch();
      this.toggleFunction = false;
    } else {
      this.stop();
      this.toggleFunction = true;
    }
  }
}
