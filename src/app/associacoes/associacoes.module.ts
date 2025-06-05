import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AssociacoesRoutingModule } from './associacoes-routing.module';
import { AssociacaoComponent } from './associacao/associacao.component';


@NgModule({
  declarations: [
    AssociacaoComponent
  ],
  imports: [
    CommonModule,
    AssociacoesRoutingModule,
    ReactiveFormsModule
  ]
})
export class AssociacoesModule { }
