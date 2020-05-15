import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponentComponent } from './promise-component/promise-component.component';
import { RxjsComponentsComponent } from './rxjs-components.component';
import { ObservableComponentModule } from './observable-component/observable-component.module';



const routes: Routes = [
  { 
    path:'', component: RxjsComponentsComponent,
    children:[
      {path:'', redirectTo:'promise-component', pathMatch: 'full'},
      {path:'promise-component',component:PromiseComponentComponent},
      {path:'observable-component', loadChildren:()=> ObservableComponentModule}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsComponentsRoutingModule { }
