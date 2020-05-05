import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProgramaModule } from './programa';
import { HomeRoutingModule } from './home-routing.module';
import { ReceitasModule } from './receitas';
import { DicasModule } from './dicas';
import { FornecedorModule } from './fornecedor';
import { KitsModule } from './kits';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    ProgramaModule,
    ReceitasModule,
    DicasModule,
    FornecedorModule,
    KitsModule,
    HomeRoutingModule,
    NgbModule


  ],
  declarations: [HomeComponent],
  providers: [],
  bootstrap: [HomeComponent],
  exports: [HomeComponent]

 
})
export class HomeModule { }
