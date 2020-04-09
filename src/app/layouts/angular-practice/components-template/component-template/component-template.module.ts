import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTemplateRoutingModule } from './component-template-routing.module';
import { ComponentTemplateComponent } from './component-template.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { UserInputComponent } from './user-input/user-input.component';
@NgModule({
  declarations: [ComponentTemplateComponent,TemplateSyntaxComponent,UserInputComponent],
  imports: [
    CommonModule,
    ComponentTemplateRoutingModule
  ]
})
export class ComponentTemplateModule { }
