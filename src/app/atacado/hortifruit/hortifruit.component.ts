import { Component, OnInit } from '@angular/core';
import { ModalhortifruitService } from './modal-hortifruit/modalhortifruit.service';



@Component({
  selector: 'app-hortifruit',
  templateUrl: './hortifruit.component.html',
  styleUrls: ['./hortifruit.component.scss']
})
export class HortifruitComponent implements OnInit {

  constructor(private modalService: ModalhortifruitService) { }

  ngOnInit(): void {
  }
  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id)
  }

  pesquisar:any ="assets/icones_svg/lupa.svg";
  tomate:any ="assets/img/atacado/hortifruit/tomate.png";
  batata:any ="assets/img/atacado/hortifruit/batata.png";
  abobrinha:any ='assets/img/atacado/hortifruit/abobrinha.png';
  cenoura:any ='assets/img/atacado/hortifruit/cenoura.png';
  beterraba: any ='assets/img/atacado/hortifruit/beterraba.png';
  agriao: any = 'assets/img/atacado/hortifruit/agriao.png';
  salsa_cebolinha: any ='assets/img/atacado/hortifruit/salsa_cebolinha.png';
  couve: any ='assets/img/atacado/hortifruit/couve.png';
  alface: any ='assets/img/atacado/hortifruit/alface_crespa.png';
  alface_americana: any ='assets/img/atacado/hortifruit/alface_americana.png';
  acelga: any = 'assets/img/atacado/hortifruit/acelga.png';
  ovo: any = 'assets/img/atacado/hortifruit/ovo.png';
  laranja: any = 'assets/img/atacado/hortifruit/laranja.png';
  limao: any = 'assets/img/atacado/hortifruit/limao.png';
  maca: any = 'assets/img/atacado/hortifruit/maca.png';
  melancia: any = 'assets/img/atacado/hortifruit/melancia.png';
  maracuja: any = 'assets/img/atacado/hortifruit/maracuja.png';
  manga: any = 'assets/img/atacado/hortifruit/manga.png';
  coco: any ='assets/img/atacado/hortifruit/coco.png';
  cebola: any = 'assets/img/atacado/hortifruit/cebola.png';
  orcamento: any = 'assets/icones_svg/icone_comprar.svg';

  k = "Kg";
  m = "pacote";
}
