import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from '../api';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private crudService: CrudService, private router: Router) { }
  public clientes: any = [];
  @ViewChild('DadosCliente') Clientes;
  public dadosclientes: any;
  ngOnInit(): void {
    this.loadClientes()
  }
  loadClientes(){
    this.crudService.getDashboard().subscribe(
      dadosclientes => {
        this.clientes = dadosclientes;
        this.dadosclientes = $(this.Clientes.nativeElement);
        setTimeout(()=>{this.dadosclientes.dataTable();}, 2000)
      }
    );
  }
  getNavigation(link, id){
    if(id === ''){
      this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }
}
