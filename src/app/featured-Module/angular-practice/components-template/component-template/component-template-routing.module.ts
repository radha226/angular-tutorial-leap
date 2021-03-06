import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentTemplateComponent } from './component-template.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
const routes: Routes = [
  {
    path:'',
    children:[
       {path:'', component : ComponentTemplateComponent},
       {path: 'template-syntax', component: TemplateSyntaxComponent},
       {path:'user-input', component : UserInputComponent},
       {path:'component-interaction', component:ComponentInteractionComponent}
    ]
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentTemplateRoutingModule { }
