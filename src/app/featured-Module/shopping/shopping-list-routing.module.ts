import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingDetailComponent } from './shopping-detail/shopping-detail.component';
const routes: Routes = [
  {path:'',
  children:[
    {path:'', component:ShoppingListComponent},
    {path:'productDetail/id/:id', component:ShoppingDetailComponent}, // without query params
    //{path:'productDetail', component:ShoppingDetailComponent} // with query params
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
