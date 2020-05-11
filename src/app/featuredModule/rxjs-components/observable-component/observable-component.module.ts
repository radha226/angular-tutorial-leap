import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponentRoutingModule } from './observable-component-routing.module';
import { ObservableComponentComponent } from './observable-component.component';
import { ToFromComponent } from './to-from/to-from.component';
import { TimerIntervalComponent } from './timer-interval/timer-interval.component';
import { FromEventComponent } from './from-event/from-event.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MapFilterComponent } from './map-filter/map-filter.component';
import { TakeComponent } from './take/take.component';
@NgModule({
  declarations: [ObservableComponentComponent, ToFromComponent, TimerIntervalComponent, FromEventComponent, SwitchMapComponent, MapFilterComponent, TakeComponent],
  imports: [
    CommonModule,
    ObservableComponentRoutingModule,
  ]
})
export class ObservableComponentModule { }
