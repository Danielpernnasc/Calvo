import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { HortifruitComponent } from './hortifruit.component';
import { ModalHortifruitComponent } from './modal-hortifruit/modal-hortifruit.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    NgxPaginationModule
  ],
  declarations: [
    HortifruitComponent,
    ModalHortifruitComponent,
  ],
  bootstrap: [HortifruitComponent]
})
export class HortifruitModule { }
