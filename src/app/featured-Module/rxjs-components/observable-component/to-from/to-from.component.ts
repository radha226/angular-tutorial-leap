import { Component, OnInit } from '@angular/core';
import { RxjsServiceService } from '../../rxjs-service.service';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-to-from',
  templateUrl: './to-from.component.html',
  styleUrls: ['./to-from.component.scss']
})
export class ToFromComponent implements OnInit {
  students = [{
    id: 1,
    name: 'Krunal',
    enrollmentnumber: 110470116021,
    college: 'VVP Engineering College',
    university: 'GTU'
  },
  {
    id: 2,
    name: 'Rushabh',
    enrollmentnumber: 110470116023,
    college: 'VVP Engineering College',
    university: 'GTU'
  },
  ];
  constructor(private service: RxjsServiceService) { }

  ngOnInit() {
    this.toOperator();
    this.fromOperator();
  }
  fromOperator() {
    let observable2 = from([{ id: 'hello', value: 6666 }, { id: 'hello333', value: 6 }]);
    //from operator convert every array, object in to observable
    observable2.subscribe((observe) => {
      this.strutureCreate(observe.id, 'fromExample');
      console.log(observe);
      
    })
  }
  toOperator() {
    //convert every argument in of operator as a next notification
    let observable1 = of('hello', 99, 'sunday', 55);  // but it does not work in case of array, promise
    observable1.subscribe((observe: any) => {
      this.strutureCreate(observe, 'toExample');
      console.log(observe);
    })
  }

  strutureCreate(res, structureId) {
    var node = document.createElement("LI");
    node.innerHTML = `Movie is ` + res;
    return document.getElementById(structureId).appendChild(node);

  }

}


