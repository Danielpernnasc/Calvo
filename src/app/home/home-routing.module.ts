import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions} from '@angular/router';
import { ProgramaComponent } from './programa';
import { DicasComponent } from './dicas';
import { ReceitasComponent } from './receitas';
import { FornecedorComponent } from './fornecedor';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {path: 'programa', component: ProgramaComponent},  
  {path: 'dicas', component: DicasComponent},
  {path: 'receitas', component: ReceitasComponent},
  {path: 'fornecedor', component: FornecedorComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
