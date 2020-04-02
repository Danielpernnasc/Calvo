import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { EmpresaModule } from './empresa';
import { AtacadoModule } from './atacado';
import { ParceirosModule } from './parceiros';
import { JornalModule } from './jornal';
import { ContatoModule } from './contato';
import { HomeModule} from './home';
import { NewsletterModule } from './newsletter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { ModalModule } from './modal';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



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
    ClickOutsideModule,
    ModalModule,
    NewsletterModule,
    ReactiveFormsModule
  ],
      declarations: [  
        AppComponent
    
      ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
