import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtacadoComponent } from './atacado.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BebidasModule } from './bebidas';
import { AcogueModule } from './acogue';
import { HigieneModule } from './higiene';
import { LimpezaModule } from './limpeza';
import { PereciveisModule } from './pereciveis';
import { MerceariaModule } from './mercearia';
import { ListaModule } from './lista';
import { AtacadoRoutingModule } from './atacado-routing.module';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    BebidasModule,
    AcogueModule,
    HigieneModule,
    LimpezaModule,
    PereciveisModule,
    MerceariaModule,
    ListaModule,

    AtacadoRoutingModule
  ],
  declarations: [AtacadoComponent],
})
export class AtacadoModule { }
