import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ContatoRoutingModule } from './contato-routing.module';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    ContatoRoutingModule
  ]
})
export class ContatoModule { }
