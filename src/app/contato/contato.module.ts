import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ContatoRoutingModule } from './contato-routing.module';
import { HomeModule } from '../home';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    ContatoRoutingModule,
    HomeModule
  ]
})
export class ContatoModule { }
