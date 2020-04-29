import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponentComponent } from './observable-component.component';
import { ToFromComponent } from './to-from/to-from.component';
import { TimerIntervalComponent } from './timer-interval/timer-interval.component';
import { FromEventComponent } from './from-event/from-event.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ObservableComponentComponent },
      { path: 'to-from', component: ToFromComponent },
      { path: 'timer_interval', component: TimerIntervalComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'switchMap', component: SwitchMapComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableComponentRoutingModule { }
