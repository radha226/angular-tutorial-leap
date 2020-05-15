import { Component, OnInit } from '@angular/core';
import { interval, of, from } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // convert stream to array
    let source1=interval(1000);   
    source1.pipe(take(5),toArray()).subscribe((res:any)=>{
       console.log(res);
    })

    //convert string in to array
    let source2=of('hello','hii','namesate');
    source2.pipe(toArray()).subscribe((observer:any)=>{
      console.log(observer);
    })
    
    //convert array int array
    let source3=from(['fruits1','fruits2','fruits3']);
    source3.pipe(toArray()).subscribe((observer3)=>{
       console.log(observer3);
    })
  }

}
