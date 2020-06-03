import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ClickOutsideModule } from 'ng-click-outside';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from './modal';
import { OrcamentoModule } from './orcamento';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AtacadoModule } from './atacado';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    OrcamentoModule,
    ClickOutsideModule,
    ModalModule,
    ReactiveFormsModule,
    NgbModule,
    AtacadoModule,

  
  ],
      declarations: [  
        AppComponent,
  
  
      ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  exports: [AppComponent]
 
})
export class AppModule { }
