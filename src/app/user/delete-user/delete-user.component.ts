import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/services/api-service';
import { AppComponent } from 'src/app/app.component';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(private cookie: CookieService,private apiService: ApiServiceService,public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    console.log(this.data);
  }
  delete(){
    console.log('delete componen');
    this.apiService.apiRequest('api/v1/users/delete/'+this.data.deleteId,'DELETE',this.cookie.get('token'),"").then(
      (response:any) => {
        console.log(response);
        // this.users=response.users;
        // this.app.toggleLoader();
        
    }).catch(error => {
      console.log(error);
      // this.app.toggleLoader();
      //this.app.alert(false,error.error.message);
    });
  }

}
