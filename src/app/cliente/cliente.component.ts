import { Component, OnInit, ViewChild } from '@angular/core';
import { BancoService } from '../api';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public clientes: any = [];
  @ViewChild('clienteTable', {static: true}) Table;
  public dataTable: any
  constructor(private bancoService: BancoService, private router: Router) { }

  ngOnInit(): void {
    this.loadCliente()
  }
  loadCliente(){
    if ($.fn.DataTable.isDataTable(this.Table.nativeElement)) {
      $(this.Table.nativeElement).dataTable().fnDestroy();
    }
    this.bancoService.getCliente().subscribe(
      clienteData => {
        this.clientes = clienteData;
        this.dataTable = $(this.Table.nativeElement);
        setTimeout(()=>{this.dataTable.DataTable();}, 2000);
      },(err)=>{
      }, ()=>{
      }
    );
  }
 
  getNavigation(link, id) {
    if(id === ''){
        this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }
  RemoverCliente(pID) {
    this.bancoService.deleteCliente(pID).subscribe(data => {
    this.loadCliente();
    })
    }
}
