import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa';

@Component({
  selector: 'app-list-empresa',
  standalone: false,
  templateUrl: './list-empresa.component.html',
  styleUrl: './list-empresa.component.scss'
})
export class ListEmpresaComponent implements OnInit {

  empresas: Empresa[] = [];
  displayedColumns: string[] = ['nomeFantasia', 'email', 'telefone'];

  constructor(
    private service: EmpresaService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
   this.service.listar().subscribe({
      next: (empresas: Empresa[]) => {
        this.empresas = empresas;
        console.log('Estados carregados:', this.empresas);
      },
      error: (error) => {
        console.error('Erro ao carregar estados:', error);
      }
    })
  }

  editar(id: number | undefined, editar: boolean) {
    if (id === undefined) return;
    this.router.navigate(['/paginas/empresas/create'], { queryParams: { "id": id, "editar": editar  } });
  }

  preparaExcluir(empresa: Empresa | undefined) {
    if (empresa === undefined) return;
    empresa.deletar = true;
  }

}
