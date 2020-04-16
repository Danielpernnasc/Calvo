import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HortifruitComponent } from './hortifruit.component';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [HortifruitComponent]
})
export class HortifruitModule { }
