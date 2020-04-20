import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { HortifruitComponent } from './hortifruit.component';
import { ModalHortifruitComponent } from './modal-hortifruit/modal-hortifruit.component';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
  ],
  declarations: [
    HortifruitComponent,
    ModalHortifruitComponent,
  ],
  bootstrap: [HortifruitComponent]
})
export class HortifruitModule { }
