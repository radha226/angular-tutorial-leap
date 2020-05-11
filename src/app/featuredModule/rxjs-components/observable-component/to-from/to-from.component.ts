import { Component, OnInit } from '@angular/core';
import { RxjsServiceService } from '../../rxjs-service.service';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-to-from',
  templateUrl: './to-from.component.html',
  styleUrls: ['./to-from.component.scss']
})
export class ToFromComponent implements OnInit {

  constructor(private service:RxjsServiceService) { }

  ngOnInit(){
    console.log('to and from');
  //let obs=of('Apple', 'Orange', 'Banana')



  //from Event

  //let obs=from(['hello',999,'Apple']);
  let obs=from([{id:'hello', value:6666},{id:'hello333', value:6}]);
   obs.subscribe(
    //next=> console.log(`next value is ${next}`),
    next=> console.log("next value is "+JSON.stringify(next)),
    error =>console.log(error),
    ()=>console.log('the End')
   )

  //  let obs=of(['Apple', 'Orange', 'Banana'])
 
   } 

}
