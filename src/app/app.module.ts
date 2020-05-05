import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ClickOutsideModule } from 'ng-click-outside';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { EmpresaModule } from './empresa';
import { AtacadoModule } from './atacado';
import { ParceirosModule } from './parceiros';
import { JornalModule } from './jornal';
import { ContatoModule } from './contato';
import { HomeModule} from './home';
import { NewsletterModule } from './newsletter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from './modal';
import { OrcamentoModule } from './orcamento';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    EmpresaModule,
    AtacadoModule,
    ParceirosModule,
    JornalModule,
    ContatoModule,
    HomeModule,
    OrcamentoModule,
    ClickOutsideModule,
    ModalModule,
    NewsletterModule,
    ReactiveFormsModule,
    NgbModule,

  ],
      declarations: [  
        AppComponent
    
      ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
