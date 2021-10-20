import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'crm';
  private obs = new Observable((listX) => {
    listX.next(Math.random());
  });
  private subj = new Subject();
  private behave = new BehaviorSubject(0);
  constructor() {
    // this.obs.subscribe((string) => console.log(string));
    // this.obs.subscribe((string) => console.log(string));
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('hello');
    // this.subj.next('hello2');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next(Math.random());
    // this.behave.subscribe((data) => console.log(data));
    // this.behave.next(1);
    // this.behave.next(2);
    // this.behave.subscribe((data) => console.log(data));
  }
}
