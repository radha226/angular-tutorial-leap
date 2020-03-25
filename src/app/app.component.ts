import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private toast:ToastrService){

  }
  loading:boolean=false;
  public toggleLoader() {
    const loader = !this.loading;
    this.loading = loader;
  }
  ngOnInit(){

  }
  alert = (value: any, msg: any) =>{
    if(value){
      this.toast.success(msg,'Success', { timeOut: 1000 });
    } else {
      this.toast.error(msg,'Error', { timeOut: 1000 });
    }
  }

}
