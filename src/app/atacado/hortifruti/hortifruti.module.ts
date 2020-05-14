import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalHortifrutiComponent } from './modal-hortifruti/modal-hortifruti.component';
import { HortifrutiComponent } from './hortifruti.component';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
  ],
  declarations: [
    HortifrutiComponent,
    ModalHortifrutiComponent
  ],
})
export class HortifrutiModule { }
