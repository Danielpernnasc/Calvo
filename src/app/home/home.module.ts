import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProgramaModule } from './programa';
import { HomeRoutingModule } from './home-routing.module';
import { ReceitasModule } from './receitas';
import { DicasModule } from './dicas';
import { FornecedorModule } from './fornecedor';
import { KitsModule } from './kits';
import { FaleCompradorModule } from './fale-comprador';




@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    ProgramaModule,
    ReceitasModule,
    DicasModule,
    FaleCompradorModule,
    FornecedorModule,
    KitsModule,
    HomeRoutingModule,
 

  ],
  declarations: [HomeComponent],
  providers: [],
  bootstrap: [HomeComponent],
  exports: [HomeComponent]

 
})
export class HomeModule { }
