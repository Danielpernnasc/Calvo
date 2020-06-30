import { Injectable, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class BancocalvoService {
  redirectUrl: string;
  baseUrl:string = "http://localhost/api_registro/";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }
  public userlogin(username, password) {
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password})
    .pipe(map(User => {
    this.setToken(Users[0].name);
    this.getLoggedInName.emit(true);
    return Users;
    }));
  }

  public userregistration(nome, rua, numero, complemento, bairro, cep, cidade, uf, email, telefone, senha, confirma) {
    return this.httpClient.post<any>(this.baseUrl + '/registro.php', { nome, rua, numero, complemento, bairro, cep, cidade, uf, email, telefone, senha, confirma })
    .pipe(map(Users => {
    return Users;
    }));
    }
  
  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggeIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}
