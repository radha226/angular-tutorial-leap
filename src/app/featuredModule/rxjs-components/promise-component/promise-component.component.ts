import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-promise-component',
  templateUrl: './promise-component.component.html',
  styleUrls: ['./promise-component.component.scss']
})
export class PromiseComponentComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.getData().then((response:any)=>{ 
    //   console.log(response);  //consumer either it is response or errror
    // },error=>{
    //   console.log(error);
    // })
  }
  getData(){
    return new Promise((resolve,reject)=>{
      this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((response:any)=>{
        resolve(response);    // return producer
      },error=>{
        reject(error);
      })
    })
  }

}
