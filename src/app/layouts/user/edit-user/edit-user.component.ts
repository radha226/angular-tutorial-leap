import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import {ActivatedRoute} from "@angular/router";
import {SharedModule} from '../../../shared/shared.module';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editForm:FormGroup;
  EditId:any;
  role: Food[] = [
    {value: 'Super Admin', viewValue: 'Super Admin'},
    {value: 'Agent', viewValue: 'Agent'},
  ];
  constructor(private SharedModule:SharedModule,private activateRoute: ActivatedRoute,private router:Router,private apiService: ApiServiceService,private formBuilder: FormBuilder,public http:HttpClient,private cookie: CookieService) {

   }
  redirect(){
    this.router.navigate(['../..'], {relativeTo:this.activateRoute});
  }
  submit(data) {
    console.log(this.editForm);
    if(!(data.valid)){
      console.log('not valid');
      this.editForm;
    }else{  
      console.log('valid');
      // this.app.toggleLoader();
      console.log(this.editForm.value);
      this.router.navigate(['../..'],{relativeTo:this.activateRoute});
      // this.loginFormSubmit(data.value).then((result:any)=>{
      //   console.log(result);
      // })
    }
  }
  loginFormSubmit(data){
    return new Promise((resolve,reject)=>{
      let headers= {
        "Content-type": "application/json; charset=UTF-8",
        'Authorization': `Bearer ${this.cookie.get('token')}`
      }
      let payload = {
      'username': data.username,
      'email': data.email,
      'password': data.password,
      'role': data.optionA,
      'userMacAddress': data.userMacAddress,
      'routerMacAddress': data.routerMacAddress,
      }
        this.apiService.apiRequest('api/v1/users/update/'+this.EditId,'PUT',this.cookie.get('token'),payload).then(
          (response:any) => {
            console.log(response.users);
            // this.app.toggleLoader();
            this.router.navigate(['list-user'])
        }).catch(error => {
          console.log(error);
          // this.app.toggleLoader();
          let ErrorMessage:any = JSON.stringify(error);
          //this.app.alert(false,ErrorMessage.message);
        });
     
       
    });
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params=>{
      console.log(params);
      this.EditId=params.id;
      if(!this.EditId) {
        alert("Invalid action.")
        this.router.navigate(['list-user']);
        return;
      }
      this.editForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        userMacAddress: [''],
        routerMacAddress: [''],
       optionA: ['', Validators.required],
      });
      this.activateRoute.params.subscribe(params=>{
       
        let viewData= {_id:1,username:'tester1',email:'dd@gmail.com', userMacAddress:'99:66:44:46:22',
        routerMacAddress:'44:DD:88:GG', role:'Super Admin',batteryStatus:100};
        this.showview(viewData);
        // this.apiService.apiRequest('api/v1/users/'+this.EditId,'GET',this.cookie.get('token'),"").then( (response:any) => {
        //   console.log(response.user);
        //   this.showview(response.user);
        // }).catch(error => {
        //   console.log(error);
        // });
      })
    })
    // let userId = window.localStorage.getItem("editUserId");
    
    // this.editForm = this.formBuilder.group({
    //   id: [''],
    //   username: ['', Validators.required],
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   age: ['', Validators.required],
    //   salary: ['', Validators.required]
    // });
    
  }

  showview(user){
    console.log(user);
    this.editForm.patchValue({
      username: user.username,
      email:user.email,
     userMacAddress:user.userMacAddress,
     routerMacAddress:user.routerMacAddress,
      optionA:user.role
    });
  }
  getQueryScheduled = (value: any) =>{
    const dumpOption = this.editForm.get('optionA');
    const userMacAddress = this.editForm.get('userMacAddress');
    const routerMacAddress = this.editForm.get('routerMacAddress');
    console.log(dumpOption.value);
    if(dumpOption.value == 'Agent'){
      userMacAddress.setValidators([Validators.required]);
      routerMacAddress.setValidators([Validators.required]);
    } else {
      userMacAddress.clearValidators();
      routerMacAddress.clearValidators();
    }
    userMacAddress.updateValueAndValidity();
    routerMacAddress.updateValueAndValidity();
  }

}
