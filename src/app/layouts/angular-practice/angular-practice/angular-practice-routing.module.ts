import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularPracticeComponent } from './angular-practice.component';
//import { TemplateSyntaxComponent } from '../components-template/component-template/template-syntax/template-syntax.component';
import { ComponentTemplateModule } from '../components-template/component-template/component-template.module';
import { FormsModule } from '../forms/forms.module';
import { ComponentAnimationsComponent } from '../component-animations/component-animations.component';
const routes: Routes = [
  {
    path:'',
    children:[
      {path:'',component:AngularPracticeComponent},
      {path:'component-template',loadChildren: () => ComponentTemplateModule},
      {path:'forms',loadChildren: () => FormsModule},
      {path:'animation', component:ComponentAnimationsComponent}
    
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularPracticeRoutingModule { }
