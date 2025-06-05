import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociacaoComponent } from './associacao/associacao.component';

const routes: Routes = [
  {
    path: '',
    component: AssociacaoComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociacoesRoutingModule { }
