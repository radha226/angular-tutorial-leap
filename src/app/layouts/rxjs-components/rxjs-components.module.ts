import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponentsRoutingModule } from './rxjs-components-routing.module';
import { PromiseComponentComponent } from './promise-component/promise-component.component';;
import { RxjsComponentsComponent } from './rxjs-components.component';
@NgModule({
  declarations: [PromiseComponentComponent,RxjsComponentsComponent],
  imports: [
    CommonModule,
    RxjsComponentsRoutingModule
  ]
})
export class RxjsComponentsModule { }
