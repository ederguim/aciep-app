import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssociacaoService } from '../associacao.service';

@Component({
  selector: 'app-associacao',
  standalone: false,
  templateUrl: './associacao.component.html',
  styleUrl: './associacao.component.scss'
})
export class AssociacaoComponent {

    camposForm: FormGroup;

    constructor(private service: AssociacaoService) {
    this.camposForm = new FormGroup({
      razaoSocial: new FormControl('', Validators.required),
      nomeFantasia: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      cnpj: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      modalidade: new FormControl('', Validators.required),
      quantidadeFuncionarios: new FormControl(0, Validators.required)
    });
  }

  salvar() {
    this.camposForm.markAllAsTouched(); 
    if (this.camposForm.valid) {  
      console.log('Form data:', this.camposForm.value);
      this.service.salvar(this.camposForm.value).subscribe({
        next: (response) => {
          console.log('Associacao salva com sucesso!:', response);
          this.camposForm.reset(); 
        },
        error: (error) => { 
          console.error('Error ao salvar associacao!:', error);
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
