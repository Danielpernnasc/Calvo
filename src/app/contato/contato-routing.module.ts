import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions, Routes } from '@angular/router';
import { FaleComponent } from './fale';
import { TelevendasComponent } from './televendas';
import { TrabalheComponent } from './trabalhe';


const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  };

  const routes: Routes = [

    {path: 'contato/fale-conosco', component: FaleComponent},
    {path: 'contato/televendas', component: TelevendasComponent},
    {path: 'contato/trabalhe-conosco', component: TrabalheComponent},
  ]


@NgModule({

    imports: [RouterModule.forRoot(routes,  {
      onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
  })

export class  ContatoRoutingModule {

}