import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  declarations: [ListaComponent],
  bootstrap: [ListaComponent]
})
export class ListaModule { }
