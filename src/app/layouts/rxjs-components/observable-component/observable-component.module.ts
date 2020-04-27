import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponentRoutingModule } from './observable-component-routing.module';
import { ObservableComponentComponent } from './observable-component.component';


@NgModule({
  declarations: [ObservableComponentComponent],
  imports: [
    CommonModule,
    ObservableComponentRoutingModule
  ]
})
export class ObservableComponentModule { }
