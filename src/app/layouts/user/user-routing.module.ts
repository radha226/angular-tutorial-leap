import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
 import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const userRoutes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    children:[
      {path:'add-user', component:AddUserComponent},
      {path:'edit-user/:id',component:EditUserComponent},
      {path:'view-user/:id',component:ViewUserComponent},
      {path:'', component:ListUserComponent}
    ]
}
  
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
