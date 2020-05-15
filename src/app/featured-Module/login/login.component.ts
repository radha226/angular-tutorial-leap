import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { ApiServiceService } from 'src/app/shared/services/api-service';
import { NgxSpinnerService } from 'ngx-spinner';

// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  cookieValue = 'UNKNOWN';
  loginform:FormGroup;
  loading:boolean=false;
  errorMessage:string;
  constructor(private spinner: NgxSpinnerService,private toastr: ToastrService,private cookie: CookieService,private router:Router,public http:HttpClient, public fb:FormBuilder, private apiService:ApiServiceService,
    private app: AppComponent) {
    this.createLogin();
  }
  createLogin(){
    this.loginform=this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }
  public toggleLoader() {
    const loader = !this.loading;
    this.loading = loader;
  }
  login(data){
    console.log(data);
    if(!(data.valid)){
      console.log('not valid');
      this.loginform;
    }else{  
      this.toggleLoader();
      this.toggleLoader(); 
      this.loginFormSubmit(data.value).then((result:any)=>{
        console.log(result);
        // this.navCtrl.setRoot(DashboardPage);
        // localStorage.setItem("userId",result.data["ID"]);
      })
    }
  }
  loginFormSubmit(data){
    return new Promise((resolve,reject)=>{
      let headers= {
        "Content-type": "application/json; charset=UTF-8",
      }
      let data1 = {
      'email': data.email,
      'password': data.password,
      }
      var output=this.apiService.checkLogin(data.email, data.password);
      if(output==true){
        this.router.navigate(['dashboard']);
      }else{
        this.errorMessage="wrong credentials";
      }
      // this.http.post('http://172.17.103.108:8000/api/v1/users/login', data1, {headers}).subscribe((result:any)=>{ 
      //   // this.router.navigate(['dashboard']);
      //   this.cookie.set( 'token', result.payload.token);
      //   // console.log('token'+result.payload.token);
      // },error => {
      //   this.app.alert(false,error.error.message)
      // }
      // );
    });
  }

  ngOnInit() {
    // this.spinner.show();
 
    // setTimeout(() => {
    
    //   this.spinner.hide();
    // }, 8000);
    this.app.toggleLoader();
    this.cookieValue=this.cookie.get('token');
    if(this.cookieValue){
      this.router.navigate(['dashboard']);
    }
  }
}