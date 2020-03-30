import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router,ActivatedRoute} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import { ApiServiceService } from 'src/app/services/api-service';
import { AppComponent } from 'src/app/app.component';
import { UserInterface } from '../user-interface';
 import {SharedModule} from '../../../shared/shared.module';
//import {UserServicesService} from '../user-services.service'

// export interface DialogData {
//   animal: string;
//   name: string;
// }
// interface Food {
//   value: string;
//   viewValue: string;
// }
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
 // UserInterface
 // configForm:FormGroup;
  adduser: FormGroup;
   RoleStatus:boolean;
  // role: Food[] = [
  //   {value: 'Super Admin', viewValue: 'Super Admin'},
  //   {value: 'Agent', viewValue: 'Agent'},
  // ];
  role:UserInterface[]=[
     {value: 'Super Admin', viewValue: 'Super Admin'},
    {value: 'Agent', viewValue: 'Agent'},
  ]
  // constructor( private formBuilder: FormBuilder,public dialogRef: MatDialogRef<AddUserComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData)
  constructor( private activatedRoute:ActivatedRoute,private router: Router,private apiService: ApiServiceService,private app: AppComponent,private formBuilder: FormBuilder,public http:HttpClient,private cookie: CookieService) {
    console.log('constructor');
   // this.checkValidationuser();
  }
  redirect(){
    this.router.navigate(['../'], {relativeTo:this.activatedRoute});
  }
  submit(data) {
    console.log(this.adduser);
    if(!(data.valid)){
      console.log('not valid');
      this.adduser;
    }else{  
     // this.app.toggleLoader();
      console.log(this.adduser.value);
      // this.addUserFormSubmit(data.value).then((result:any)=>{
      //   console.log(result);
      // })
    }
    }

    // addUserFormSubmit(data){
    //   return new Promise((resolve,reject)=>{
    //     let headers= {
    //       "Content-type": "application/json; charset=UTF-8",
    //       'Authorization': `Bearer ${this.cookie.get('token')}`
    //     }
    //     let data1 = {
    //     'username': data.username,
    //     'email': data.email,
    //     'password': data.password,
    //     'mobileNumber':data.mobile,
    //     'role': data.roleType,
    //     'userMacAddress': data.userMacAddress,
    //     'routerMacAddress': data.routerMacAddress,
    //     }
    //       this.apiService.apiRequest('api/v1/users','POST',this.cookie.get('token'),data1).then(
    //         (response:any) => {
    //           console.log(response.users);
    //           this.app.toggleLoader();
    //           this.router.navigate(['list-user'])
    //       }).catch(error => {
    //         console.log(error);
    //         this.app.toggleLoader();
    //         let ErrorMessage:any = JSON.stringify(error);
    //         this.app.alert(false,ErrorMessage.message);
    //       });  
    //   });
    // }

    checkValidationuser(){
     console.log('validations');
      let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
      let phoneNumber ="^((\\+91-?)|0)?[0-9]{10}$";
      this.adduser = this.formBuilder.group({
        id: [],
        username: ['', Validators.required],
        password: ['',[ Validators.required,Validators.maxLength(6)]],
        email: ['', [ Validators.required,Validators.pattern(emailPattern)]],
        mobile:['',[ Validators.required,Validators.maxLength(10),Validators.pattern(phoneNumber)]],
        userMacAddress: [''],
        routerMacAddress: [''],
       roleType: ['', Validators.required],
      });
    }
    getRoleValidation = (value: any) =>{
      const dumpOption = this.adduser.get('roleType');
      const userMacAddress = this.adduser.get('userMacAddress');
      const routerMacAddress = this.adduser.get('routerMacAddress');
      console.log(dumpOption.value);
      if(dumpOption.value == 'Agent'){
        this.RoleStatus=true;
        userMacAddress.setValidators([Validators.required]);
        routerMacAddress.setValidators([Validators.required]);
      } else {
        this.RoleStatus=false;
        userMacAddress.clearValidators();
        routerMacAddress.clearValidators();
        userMacAddress.enabled;
        this.adduser.controls['routerMacAddress'].setValue('');
        this.adduser.controls['userMacAddress'].setValue('');
      }
      userMacAddress.updateValueAndValidity();
      routerMacAddress.updateValueAndValidity();
    }
  ngOnInit() {
    this.checkValidationuser();
  }


}
