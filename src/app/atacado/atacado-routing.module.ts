import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions, Routes } from '@angular/router';
import { BebidasComponent } from './bebidas';
import { AcogueComponent } from './acogue';
import { PereciveisComponent } from './pereciveis';
import { HigieneComponent } from './higiene';
import { LimpezaComponent } from './limpeza';
import { MerceariaComponent } from './mercearia';
import { ListaComponent } from './lista';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

  const routes: Routes = [
    {path: 'atacado/bebidas', component: BebidasComponent},
    {path: 'atacado/carnes', component: AcogueComponent},
    {path: 'atacado/pereciveis', component: PereciveisComponent},
    {path: 'atacado/higiene', component: HigieneComponent},
    {path: 'atacado/limpeza', component: LimpezaComponent},
    {path: 'atacado/mercearia', component: MerceariaComponent },
    {path: 'atacado/lista', component: ListaComponent}   

  ]

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]

})
export class  AtacadoRoutingModule {

}