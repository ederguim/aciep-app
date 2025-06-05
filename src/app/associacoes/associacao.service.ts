import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Associacao } from './associacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociacaoService {

  constructor(private http: HttpClient) { }

  salvar(associacao: Associacao): Observable<Associacao> {
    const url = 'http://localhost:3000/associacoes'; 
    return this.http.post<Associacao>(url, associacao); 
  }

  listar(): Observable<Associacao[]> {
    const url = 'http://localhost:3000/associacoes'; 
    return this.http.get<Associacao[]>(url); 
  } 
}
