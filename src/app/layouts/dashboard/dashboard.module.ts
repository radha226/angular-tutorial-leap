import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule,MatRippleModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatTooltipModule } from '@angular/material';
@NgModule({
  declarations: [
   DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class DashboardModule { 
  
}
