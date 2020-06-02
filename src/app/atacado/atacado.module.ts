import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtacadoComponent } from './atacado.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { HomeModule } from '../home';




@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    HomeModule
  ],
  declarations: [AtacadoComponent],
  exports: [AtacadoComponent]
})
export class AtacadoModule { }
