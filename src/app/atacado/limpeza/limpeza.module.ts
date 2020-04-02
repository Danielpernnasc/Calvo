import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimpezaComponent } from './limpeza.component';
// import { LimpezaRoutingModule } from './limpeza-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalLimpezaComponent } from './modal-limpeza';

@NgModule({
  imports: [
    CommonModule,
    // LimpezaRoutingModule,
    AngularSvgIconModule
  ],
  declarations: [
    LimpezaComponent,
    ModalLimpezaComponent
  ],
})
export class LimpezaModule { }
