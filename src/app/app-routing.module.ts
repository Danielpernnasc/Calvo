import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions} from '@angular/router';
import { HomeComponent } from './home';
import { EmpresaComponent } from './empresa';
import { AtacadoComponent } from './atacado';
import { JornalComponent } from './jornal';
import { ContatoComponent } from './contato';
import { ParceirosComponent } from './parceiros';
import { NewsletterComponent } from './newsletter';
import { OrcamentoComponent } from './orcamento';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent },
  {path: 'empresa', component: EmpresaComponent },
  {path: 'atacado', component: AtacadoComponent },
  {path: 'jornal', component: JornalComponent },
  {path: 'contato', component: ContatoComponent },
  {path: 'parceiros', component: ParceirosComponent},
  {path: 'newsletter', component: NewsletterComponent}, 
  {path: 'orcamento', component: OrcamentoComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
