import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularPracticeComponent } from './angular-practice.component';
//import { TemplateSyntaxComponent } from '../components-template/component-template/template-syntax/template-syntax.component';
import { ComponentTemplateModule } from '../components-template/component-template/component-template.module';
const routes: Routes = [
  {
    path:'',
    children:[
      {path:'',component:AngularPracticeComponent},
      {path:'component-template',loadChildren: () => ComponentTemplateModule},
      //{path: 'component-template/template-syntax', component: TemplateSyntaxComponent}
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularPracticeRoutingModule { }
