import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresaComponent } from './create-empresa/empresa.component';
import { ListEmpresaComponent } from './list-empresa/list-empresa.component';


@NgModule({
  declarations: [
    EmpresaComponent,
    ListEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class EmpresasModule { }
