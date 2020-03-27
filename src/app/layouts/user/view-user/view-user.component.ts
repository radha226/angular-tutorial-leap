import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ApiServiceService } from 'src/app/services/api-service';
import { AppComponent } from 'src/app/app.component';
import {Router} from "@angular/router";
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})

export class ViewUserComponent implements OnInit {
  viewForm:FormGroup;
  role: Food[] = [
    {value: 'Super Admin', viewValue: 'Super Admin'},
    {value: 'Agent', viewValue: 'Agent'},
  ];
  constructor(private cookie: CookieService,private activateRoute: ActivatedRoute,private router: Router, private apiService: ApiServiceService, private app: AppComponent,private formBuilder: FormBuilder) { }

  redirect(){
    this.router.navigate(['../..'],{relativeTo:this.activateRoute})
  }
  ngOnInit() {
    this.viewForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      userMacAddress: ['',Validators.required],
      routerMacAddress: [''],
      optionA: ['', Validators.required],
    });
    this.activateRoute.params.subscribe(params=>{
      this.apiService.apiRequest('api/v1/users/'+params.id,'GET',this.cookie.get('token'),"").then( (response:any) => {
        console.log(response.user);
        this.showview(response.user);
      }).catch(error => {
        console.log(error);
      });
    })
  }
  viewCancel(){
    this.router.navigate(['list-user']);
  }
  showview(user){
    console.log(user);
     this.viewForm.patchValue({
        username: user.username,
        email:user.email,
        userMacAddress:user.userMacAddress,
        routerMacAddress:user.routerMacAddress,
         optionA:user.role
        });
  }
}
