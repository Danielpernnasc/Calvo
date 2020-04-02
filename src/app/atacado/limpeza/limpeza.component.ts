import { Component, OnInit } from '@angular/core';
import { ModalLimpezaService } from './modal-limpeza';

@Component({
  selector: 'app-limpeza',
  templateUrl: './limpeza.component.html',
  styleUrls: ['./limpeza.component.scss']
})
export class LimpezaComponent implements OnInit {

  constructor(private modalService: ModalLimpezaService) { }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  pesquisar:any ="assets/icones_svg/lupa.svg";
  orcamento: any = 'assets/icones_svg/icone_comprar.svg';
  limp_1 = 'assets/img/atacado/limpeza/ID1_ow@2x.png';
  limp_2 = 'assets/img/atacado/limpeza/ID2_ox@2x.png';
  limp_3 = 'assets/img/atacado/limpeza/ID3@2x.png';
  limp_4 = 'assets/img/atacado/limpeza/ID4@2x.png';
  limp_5 = 'assets/img/atacado/limpeza/ID5@2x.png';
  limp_6 = 'assets/img/atacado/limpeza/ID6@2x.png';
  limp_7 = 'assets/img/atacado/limpeza/ID7@2x.png';
  limp_8 = 'assets/img/atacado/limpeza/ID8_o@2x.png';
  limp_9 = 'assets/img/atacado/limpeza/ID9@2x.png';
  limp_10 = 'assets/img/atacado/limpeza/ID10@2x.png';
  limp_11 = 'assets/img/atacado/limpeza/ID11_o@2x.png';
  limp_12 = 'assets/img/atacado/limpeza/ID12_o@2x.png';
  limp_13 = 'assets/img/atacado/limpeza/ID13@2x.png';
  limp_14 = 'assets/img/atacado/limpeza/ID14@2x.png';
  limp_15 = 'assets/img/atacado/limpeza/ID15@2x.png';
  limp_16 = 'assets/img/atacado/limpeza/ID16@2x.png';

  lt_2 = '2 litros';
  ml_5 = '500 ml';
  lt_1 = '1 litro';
  ml_7_5 = '750 ml';
  uni_8 = '8 un';
  g_60 = '60 g'

}
