import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from './empresa';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  salvar(empresa: Empresa): Observable<Empresa> {
    const url = 'http://localhost:3000/empresas';
    return this.http.post<Empresa>(url, empresa);
  }

  atualizar(empresa: Empresa): Observable<Empresa> {
    const id = empresa.id;
    if (id === undefined) {
      throw new Error('ID da empresa é obrigatório para atualização.');
    }
    const url = `http://localhost:3000/empresas/${id}`;
    return this.http.put<Empresa>(url, empresa);
  }

  listar(): Observable<Empresa[]> {
    const url = 'http://localhost:3000/empresas';
    return this.http.get<Empresa[]>(url);
  }

  buscarPorId(id: string): Observable<Empresa | undefined> {
    const url = 'http://localhost:3000/empresas';
    return this.http.get<Empresa[]>(url).pipe(
      map(empresas => empresas.find(e => Number(e.id) === Number(id)))
    );
  }
}
