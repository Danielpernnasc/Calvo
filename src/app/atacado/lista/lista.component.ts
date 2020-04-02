import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downlist: any = 'assets/icones_svg/atacado/arquivo_lista.svg';
  orcamento:any ="assets/icones_svg/atacado/orcamento_list.svg";
  pesquisar: any ='assets/icones_svg/lupa.svg';

}
