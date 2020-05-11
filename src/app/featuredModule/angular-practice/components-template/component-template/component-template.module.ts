import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTemplateRoutingModule } from './component-template-routing.module';
import { ComponentTemplateComponent } from './component-template.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { UserInputComponent } from './user-input/user-input.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentChildComponent } from './component-interaction/component-child/component-child.component';

@NgModule({
  declarations: [ComponentTemplateComponent,TemplateSyntaxComponent,UserInputComponent, ComponentInteractionComponent, ComponentChildComponent],
  imports: [
    CommonModule,
    ComponentTemplateRoutingModule,
    SharedModule
  ]
})
export class ComponentTemplateModule { }
