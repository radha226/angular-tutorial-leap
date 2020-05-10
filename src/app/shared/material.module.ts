import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDialogModule,MatRadioModule,MatCheckboxModule, MatListModule, MatCardModule, MatBadgeModule} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatRadioModule, MatCheckboxModule,
    MatListModule,MatCardModule,MatBadgeModule
  ],
  exports:[
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatRadioModule, MatCheckboxModule,
    MatListModule,MatCardModule,MatBadgeModule
  ]
})
export class MaterialModule { }
