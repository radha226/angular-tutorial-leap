import { Component, OnInit } from '@angular/core';
import { timer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-interval',
  templateUrl: './timer-interval.component.html',
  styleUrls: ['./timer-interval.component.scss']
})
export class TimerIntervalComponent implements OnInit {
  subscription:Subscription;
  movies=[];
  constructor() { }

  ngOnInit() {
    // const time=interval(1000);   //syntax is interval(interval time)
    const time=timer(5000,1000);   //timer stytax is timer(delay time, interval time)
    this.subscription = time.subscribe((res)=>{
      error=>console.log(error);
      console.log(res);
      this.movies.push(res);
      if(res >= 5){
        this.subscription.unsubscribe();
      }
    })





  }

}
