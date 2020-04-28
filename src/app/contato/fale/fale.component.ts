import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fale',
  templateUrl: './fale.component.html',
  styleUrls: ['./fale.component.scss']
})
export class FaleComponent implements OnInit {
  public mask = ['(',/[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]
  constructor() { }

  ngOnInit() {
  }
  tel_sale: any = 'assets/icones_svg/contato/telefone_vendas.svg';
  address_calvo = "Av. Rio das Pedras, 2118 - Jd. Aricanduva, São Paulo (SP)";
  telefone_calvo = "11 2723-6000";
  email_calvo = 'calvo@calvoatac.com.br';
}
