import { Component, OnInit } from '@angular/core';
import { timer, interval, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-timer-interval',
  templateUrl: './timer-interval.component.html',
  styleUrls: ['./timer-interval.component.scss']
})
export class TimerIntervalComponent implements OnInit {
  subscriptionTimer: Subscription;
  subscriptionInterval: Subscription;
  movies = [];
  constructor() { }

  ngOnInit() {

    const time = timer(5000, 1000);   //timer stytax is timer(delay time, interval time)
    this.subscriptionTimer = time.subscribe((res) => {
      error => console.log(error);
      this.strutureCreate(res, 'timerExample');
      if (res >= 5) {
        this.subscriptionTimer.unsubscribe();
      }
    })


    // const time=interval(1000);   //syntax is interval(interval time)
    const intervalSource = interval(1000);
    this.subscriptionInterval = intervalSource.subscribe((response: any) => {
      this.strutureCreate(response, 'intervalExample');
      if (response >= 5) {
        this.subscriptionInterval.unsubscribe();
      }
    })



    let dfdfd = [];
    const mashup = of('anything', ['you', 'want'], 23, true, { cool: 'stuff' })

    mashup.subscribe(val =>
      console.log(val));
    //dfdfd.push(mashup);
    console.log(mashup);


  }
  strutureCreate(res, structureId) {
    var node = document.createElement("LI");
    node.innerHTML = `Movie is ` + res;
    return document.getElementById(structureId).appendChild(node);

  }

}
