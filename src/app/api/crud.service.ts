import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
    //base api url
  public url = 'http://localhost/API_Calvo/';
  constructor(private http: HttpClient) { 
  }

  getDashboard() {
    return this.http.get(this.url + 'clientes.php');
  }
  getDetails(id){
    return this.http.get(this.url + 'dados.php?id' + id)
  }
  cadastrarCliente(data) {
    return this.http.post(this.url + 'cadastro.php', data);
  }
  atualizarClient(data){
    return this.http.post(this.url + 'cadastro.php', data);
  }
  deleteCliente(id){
    return this.http.get(this.url + 'delete.php?id=' + id);
  }

 }