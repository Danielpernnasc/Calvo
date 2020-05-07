import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HortifruitComponent } from './hortifruit.component';
import { ModalHortifruitComponent } from './modal-hortifruit/modal-hortifruit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    NgbModule
  ],

  declarations: [
    HortifruitComponent,
    ModalHortifruitComponent
  ],
  providers: [],

})
export class HortifruitModule { }
