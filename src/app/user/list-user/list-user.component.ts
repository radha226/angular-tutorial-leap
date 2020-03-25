import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import { ApiServiceService } from 'src/app/services/api-service';
import { AppComponent } from 'src/app/app.component';
//import {MatDialog, MatDialogConfig} from "@angular/material";
import { AddUserComponent } from '../add-user/add-user.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ThrowStmt } from '@angular/compiler';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: any[];
  
  constructor(private router: Router, private cookie: CookieService,
    private apiService: ApiServiceService, private app: AppComponent,private dialog: MatDialog) { }

  ngOnInit() {
    console.log('ngonit');
    this.app.toggleLoader();
    console.log(this.cookie.get('token'));
    // if(!this.cookie.get('token')) {
    //   this.router.navigate(['login']);
    //   return;
    // }
    console.log(this.cookie.get('token'));
    this.apiService.apiRequest('api/v1/users','GET',this.cookie.get('token'),"").then(
      (response:any) => {
        console.log(response.users);
        this.users=response.users;
        this.app.toggleLoader();
        
    }).catch(error => {
      console.log(error);
      this.app.toggleLoader();
      this.app.alert(false,error.error.message);
      // if(error['status'] == 440 ){
      //   this.router.navigate(['login']);
      // }
    });
  }
  deleteUser(id){
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '250px',
      data: {deleteId:id },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
      this.ngOnInit();
      
    });

    console.log(id);
    
  };

  viewUser(id){
    console.log('view');
    console.log(id);
    this.router.navigate(['list-user/view-user/'+id]);
  }
  editUser(id){
    console.log(id);
    this.router.navigate(['list-user/edit-user/'+id]);
  };
  addUser() {
    console.log('add user clicked');
    this.router.navigate(['list-user/add-user'])
  };

}
