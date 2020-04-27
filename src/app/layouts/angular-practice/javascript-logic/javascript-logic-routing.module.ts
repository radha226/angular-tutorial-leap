import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavascriptLogicComponent } from './javascript-logic.component';
import { JavascriptArrayComponent } from './javascript-array/javascript-array.component';


const routes: Routes = [
  {
    path: '',
    children:[
      {path:'', component: JavascriptLogicComponent},
      {path:'array', component: JavascriptArrayComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptLogicRoutingModule { }
