import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from './empresa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  salvar(empresa: Empresa): Observable<Empresa> {
    const url = 'http://localhost:3000/empresas'; 
    return this.http.post<Empresa>(url, empresa); 
  }

  listar(): Observable<Empresa[]> {
    const url = 'http://localhost:3000/empresas'; 
    return this.http.get<Empresa[]>(url); 
  } 
}
