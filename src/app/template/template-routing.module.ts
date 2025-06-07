import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'empresas',
        loadChildren: () => import('../empresas/empresas.module').then(m => m.EmpresasModule),
        data: {
          titulo: 'ACIEP', subTitulo: 'Gerenciar Empresas'
        }
      },
      {
        path: 'associacoes',
        loadChildren: () => import('../associacoes/associacoes.module').then(m => m.AssociacoesModule),
        data: {
          titulo: 'ACIEP', subTitulo: 'Gerenciar Associações'
        }
      }
    ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
