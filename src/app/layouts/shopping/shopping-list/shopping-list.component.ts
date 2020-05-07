import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private http:HttpClient) { }
  products:Array<any>=[];
  ngOnInit() {
    this.spinner.show();
    this.getProducts().then((result:any)=>{
      this.products=result;
      console.log(this.products);
      this.spinner.hide();
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
