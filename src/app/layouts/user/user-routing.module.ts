import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
// import { AddUserComponent } from './add-user/add-user.component';

const userRoutes: Routes = [
  {
    path: '', component: ListUserComponent
}
  
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
