import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponentComponent } from './observable-component.component';
import { ToFromComponent } from './to-from/to-from.component';
import { TimerIntervalComponent } from './timer-interval/timer-interval.component';
import { FromEventComponent } from './from-event/from-event.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MapFilterComponent } from './map-filter/map-filter.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { TakeComponent } from './take/take.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ObservableComponentComponent },
      { path: 'to-from', component: ToFromComponent },
      { path: 'timer_interval', component: TimerIntervalComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'switchMap', component: SwitchMapComponent },
      { path: 'map_filter', component: MapFilterComponent },
      { path: 'toArray', component: ToArrayComponent },
      {path:'take', component: TakeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableComponentRoutingModule { }
