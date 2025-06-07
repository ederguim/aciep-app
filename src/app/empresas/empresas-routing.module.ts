import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './create-empresa/empresa.component';
import { ListEmpresaComponent } from './list-empresa/list-empresa.component';

const routes: Routes = [
  { path: 'create', component: EmpresaComponent },
  { path: 'list', component: ListEmpresaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
