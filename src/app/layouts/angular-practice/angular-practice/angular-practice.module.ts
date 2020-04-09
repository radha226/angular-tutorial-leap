import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularPracticeRoutingModule } from './angular-practice-routing.module';
import { AngularPracticeComponent } from './angular-practice.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { ComponentTemplateComponent } from '../components-template/component-template/component-template.component';
// import { TemplateSyntaxComponent } from '../components-template/component-template/template-syntax/template-syntax.component';
// import { UserInputComponent } from '../components-template/component-template/user-input/user-input.component';


@NgModule({
  declarations: [AngularPracticeComponent],
  imports: [
    CommonModule,
    AngularPracticeRoutingModule,
    SharedModule
  ]
})
export class AngularPracticeModule { }
