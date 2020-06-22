import { Component, OnInit } from '@angular/core';
import { CrudService } from '../api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  clienteID: any;
  clienteData: any;
  constructor(
    private crudService: CrudService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this. clienteID = this.actRoute.snapshot.params['id'];
    this.loadClientDetails(this.clienteID);
  }
  loadClientDetails(clienteID) {
    this.crudService.getDetails(clienteID).subscribe(clientes => {
      this.clienteData = clientes;
    });
  }
  navigation(link){
    this.router.navigate([link]);
  }

}
