import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BancoService {

  public url = 'http://localhost/novoapicalvo/'
  public url_teste = 'http://localhost/api_registro/'

  constructor(private http: HttpClient) {}

  

  createClient(data){
    return this.http.post(this.url + 'cadastro.php', data);
  }

  login(data) {
    return this.http.post(this.url + 'login.php', data);
  }

  createNews(data){
    return this.http.post(this.url + 'newsletter.php', data);
  }
  getCliente(){
    return this.http.get(this.url_teste + 'clientes.php');
  }
  getClienteDetails(id){
    return this.http.get(this.url_teste + 'dados.php?id=' + id);
  }
  updateCliente(data){
    return this.http.post(this.url_teste + 'editar.php', data)
  }
  deleteCliente(id){
    return this.http.get(this.url_teste + 'delete.php?id=' + id)
  }
}
