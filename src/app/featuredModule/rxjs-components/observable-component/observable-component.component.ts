import { Component, OnInit } from '@angular/core';
import { Student } from './Student';
import { Observable, of } from 'rxjs';
import { RxjsServiceService } from '../rxjs-service.service';


@Component({
  selector: 'app-observable-component',
  templateUrl: './observable-component.component.html',
  styleUrls: ['./observable-component.component.scss']
})
export class ObservableComponentComponent implements OnInit {
  students: Student[] = [{
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
  {
    id: 3,
    name: 'Ankit',
    enrollmentnumber: 110470116022,
    college: 'VVP Engineering College',
    university: 'GTU'
  }];
  constructor(private data: RxjsServiceService) { }
  varObservable1: Observable<any>;
  ngOnInit() {

    function isObservable(v) {
      return 'object' === typeof v && 'function' === typeof v.observable
    }


    //creating observable with new observable instance
    this.getObservablewWithNewInstance().subscribe((observer: any) => {
      console.log('new instance ' + observer),
        error => console.log('eroor' + error),
        () => console.log('Observer got a complete notification')
    })

    //create observable wtih create observable
    this.getObservableWithCreateObservable().subscribe((observer: any) => {
      console.log('create observable ' + observer)
    })

    // create observable with return function as a observable
    this.getObservableWithReturnFunctionAsObservable().subscribe((observer: any) => {
      console.log('return function ' + observer);
    })

    // creat observable wtih making a variable as a observable
    this.variableAsObservable().subscribe((observer: any) => {
      console.log(observer);
    })
  }
  getObservablewWithNewInstance() {
    //creating observable with observable instance
    return new Observable<any>(data => {
      setTimeout(() => {
        data.next('instance 1');
      }, 1000),
        setTimeout(() => {
          data.next("instance 2");
        }, 4000);
      setTimeout(() => {
        data.next("instance 3");
      }, 6000);
    });
  }

  getObservableWithCreateObservable() {
    //creating observable with create
    return Observable.create((observer: any) => {
      observer.next('data emit');
    })
  }


  getObservableWithReturnFunctionAsObservable(): Observable<any> {
    //return observable as function 
    return of('data emit as a function return');
  }

  variableAsObservable() {
    // with variable observable
    return this.varObservable1 = of('hello everyone with observable as variable');
  }

}

