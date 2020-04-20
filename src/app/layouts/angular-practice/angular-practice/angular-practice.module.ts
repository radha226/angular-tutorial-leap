import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularPracticeRoutingModule } from './angular-practice-routing.module';
import { AngularPracticeComponent } from './angular-practice.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentAnimationsComponent } from '../component-animations/component-animations.component';
@NgModule({
  declarations: [AngularPracticeComponent, ComponentAnimationsComponent],
  imports: [
    CommonModule,
    AngularPracticeRoutingModule,
    SharedModule
  ]
})
export class AngularPracticeModule { }
