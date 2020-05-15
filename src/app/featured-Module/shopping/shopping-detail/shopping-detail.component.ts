import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss']
})
export class ShoppingDetailComponent implements OnInit {
  products:Array<any>=[];
  produceDetail:object={};
  constructor(private spinner: NgxSpinnerService,private activatedRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.spinner.show();
    this.activatedRoute.params.subscribe((params:any)=>{
      let id=params.id;
      this.getProducts().then((result:any)=>{
        result.forEach((value , index)=> {
          if(value._id==id){
            console.log(value);
            this.produceDetail= value;
            this.spinner.hide();
          }
        });
       
      })
    })  
  }

  getProducts(){
    return new Promise((resolve, reject) => {
      this.http.get('https://radha226.github.io/api-link/').subscribe((result)=>{
        resolve(result)
      },error=>{
        reject(error);
      })
    })
  }

}
