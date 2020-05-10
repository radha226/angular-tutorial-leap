import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxSpinnerModule
  ],
  exports:[
    MaterialModule,
    NgxSpinnerModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
    }
 }
