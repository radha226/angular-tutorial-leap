import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptLogicRoutingModule } from './javascript-logic-routing.module';
import { JavascriptLogicComponent } from './javascript-logic.component';
import { JavascriptArrayComponent } from './javascript-array/javascript-array.component';


@NgModule({
  declarations: [JavascriptLogicComponent,JavascriptArrayComponent],
  imports: [
    CommonModule,
    JavascriptLogicRoutingModule
  ]
})
export class JavascriptLogicModule { }
