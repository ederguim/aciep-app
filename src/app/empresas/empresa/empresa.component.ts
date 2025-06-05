import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpresaService } from '../empresa.service';
import { AssociacaoService } from '../../associacoes/associacao.service';
import { Associacao } from '../../associacoes/associacao';

@Component({
  selector: 'app-empresa',
  standalone: false,
  templateUrl: './empresa.component.html',
  styleUrl: './empresa.component.scss'
})
export class EmpresaComponent implements OnInit {

  camposForm: FormGroup;
  associacoes: Associacao[] = []; 

  constructor(private service: EmpresaService, private associacaoService: AssociacaoService, ) {
    this.camposForm = new FormGroup({
      razaoSocial: new FormControl('', Validators.required),
      nomeFantasia: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      cnpj: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      modalidade: new FormControl('', Validators.required),
      quantidadeFuncionarios: new FormControl(0, Validators.required),
      associacaoId: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
      this.associacaoService.listar().subscribe({
        next: (associacoes) => this.associacoes = associacoes,
        error: (error) => {
          console.error('Error ao listar associações:', error);
        }
    })
  }

  salvar() {
    this.camposForm.markAllAsTouched(); 
    if (this.camposForm.valid) {  
      console.log('Form data:', this.camposForm.value);
      this.service.salvar(this.camposForm.value).subscribe({
        next: (response) => {
          console.log('Empresa salva com sucesso!:', response);
          this.camposForm.reset(); 
        },
        error: (error) => { 
          console.error('Error ao salvar empresa!:', error);
        }
      });
    }
  }

  isValidacaoCampo(campo: string): boolean {
    const control = this.camposForm.get(campo); 
    return (control?.invalid && control?.touched && control?.errors?.['required']) || false;
  }

  onSubmit() {
    if (this.camposForm.valid) {
      console.log('Form submitted:', this.camposForm.value);
    } else {
      console.error('Form is invalid');
    }
  }

}
