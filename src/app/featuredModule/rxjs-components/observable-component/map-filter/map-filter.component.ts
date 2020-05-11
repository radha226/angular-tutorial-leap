import { Component, OnInit } from '@angular/core';
import { of, Subscription, timer, fromEvent, Observable, from, interval, concat  } from 'rxjs';
import { filter, map, take } from 'rxjs/operators'; ;

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.scss']
})
export class MapFilterComponent implements OnInit {
  subscription:Subscription;
  constructor() { }

  ngOnInit() {
    console.log('ngonit');
    // this.getMapData().subscribe((x)=>{
    //   console.log(x);
    // })


    ///take operator example
    //take()  => value in argument, return till that no of value by source observable
    // let data=[1,2,3,4];
    // let obs=of(1,2,3,4,5,6,7,8,9).pipe(
    //   take(19)
    // );
    // obs.subscribe((val)=>{
    //   console.log(val);
    // })




    //cancat operator examples

    //Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.
    let obs=of(1,2,3,4,5,6,7,8,9).pipe(
      take(19)
    );
    const timer =from(['bb','gg','hh']).pipe(take(2));
    concat(timer, obs) // concatenating the same Observable!
    .subscribe(
      value => console.log(value),
      err => {},
      () => console.log('...and it is done!')
    );
  }
  getMapData(){
    //pipe operator is used to combine more than one opeator
    // first we are filter only even number
    // second than with map operator we are transforming our data by adding some text or any thing.
    let data=[0,1,2,3,4,5,6,7,8,9,10];
    return from(data).pipe(
        filter(x=>x%2===0),
        map(x => `even number is ${x} `)
      );
  
  }
}
