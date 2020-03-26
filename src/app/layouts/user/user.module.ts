import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
// import { AddUserComponent } from './add-user/add-user.component';
import { MatButtonModule,MatRippleModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatTooltipModule } from '@angular/material';
@NgModule({
  declarations: [
    ListUserComponent,
    //AddUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class UserModule { }
