import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaCepComponent } from './pesquisa-cep/pesquisa-cep.component'

const routes: Routes = [{ path: 'app-pesquisa-cep', component: PesquisaCepComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
