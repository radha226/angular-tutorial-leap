import { Component, OnInit } from '@angular/core';
import { Student } from './Student';
import { Observable } from 'rxjs';

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
  constructor() { }

  ngOnInit() {
    this.getObservable().subscribe((observer:any)=>{
      console.log(observer),
      error=> console.log('eroor'+error),
      () => console.log('Observer got a complete notification')
    })
  }
  getObservable(){
    return new Observable(data=>{
      setTimeout(()=>{
        data.next(this.students);
      },2000),
      setTimeout(()=>{
        data.next("hello to all");
      },3000);
    });
  }

}

