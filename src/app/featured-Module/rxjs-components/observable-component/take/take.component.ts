import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let source1=of('helo','lapi', 'desktop','all');
    source1.pipe(take(2)).subscribe((observer)=>{
       console.log(observer);
      // output 
      // helo         
      // lapi
    })
  }

}
