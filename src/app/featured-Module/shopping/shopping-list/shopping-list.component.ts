import { Component, OnInit ,OnDestroy, ViewChild, ChangeDetectorRef} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { MatTableDataSource,MatPaginator } from '@angular/material';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private http:HttpClient,private changeDetectorRef: ChangeDetectorRef) { }
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
  check$:Observable<any>;
  dataSource:Observable<any[]>;
  //dataSource = new MatTableDataSource();
  ngOnInit() {
    this.spinner.show();
    this.getProducts().subscribe((result:any)=>{
      this.dataSource =result;
      console.log(typeof(this.dataSource));
      console.log(this.dataSource);
      this.spinner.hide();
    })

     this.getData().subscribe((result:any)=>{
      console.log(result),
      error=> console.log('eroor'+error),
      () => console.log('Observer got a complete notification')
    })
  }

  getData(){
    // use observable as a variable
    console.log(typeof(this.check$));
    return this.check$=of(1,2,3,4,5,6,7,8,9);
  }
  // getData(): Observable<any>{
    // here we return function as a observable
  //   let data='hello bhai';
  //   return of(1,2,3,4,5,6,7,8,9);
  // }
  // getData(){
    //example of creating observalbe
  //   return new Observable((result:any) => {
  //     setTimeout(()=>{
  //       result.next(this.students);
  //     },2000),
  //     setTimeout(()=>{
  //       result.next("hello to all");
  //     },4000);
  //   })
  // }
   // getData(){
  //   return new Promise((resolve, reject) => {
  //     resolve(this.students)
  //   })
  // }


  ngOnDestroy() {
    if (this.dataSource) { 
    //  this.dataSource.disconnect(); 
    }
  }
  applyFilter(event: Event) {
    // console.log(event);
    // const filterValue = (event.target as HTMLInputElement).value;
    // console.log(filterValue);
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // getProducts(){
  //   return new Promise((resolve, reject) => {
  //     this.http.get('https://radha226.github.io/api-link/').subscribe((result)=>{
  //       resolve(result)
  //     },error=>{
  //       reject(error);
  //     })
  //   })
  // }

  getProducts(){
    return new Observable((result:any) => {
      this.http.get('https://radha226.github.io/api-link/').subscribe((ApiResponse:any)=>{
        result.next(ApiResponse);
      })
    })
  }

}
