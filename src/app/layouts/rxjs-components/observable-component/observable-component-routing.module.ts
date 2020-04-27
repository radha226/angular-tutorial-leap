import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponentComponent } from './observable-component.component';


const routes: Routes = [
  {path:'',
  children:[
   {path:'', component:ObservableComponentComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableComponentRoutingModule { }
