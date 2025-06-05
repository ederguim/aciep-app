import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresaComponent } from './empresa/empresa.component';


@NgModule({
  declarations: [
    EmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmpresasModule { }
