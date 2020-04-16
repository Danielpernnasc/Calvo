import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
  }
  fornecedor() {
    this.router.navigateByUrl('fornecedor');
  }
  kits_especiais() {
    this.router.navigateByUrl('kits_especiais');
  }
  baixartabloide() {
    window.open('https://dashboard-magictv.com.br/calvo/jornalcalvosemanal/JornalCalvoAtacadista961.pdf')
  }
  fidelidade: any ="assets/img/home/ID01.png";
  dicas: any ="assets/img/home/ID02.png";
  receitas: any ="assets/img/home/ID03.png";
  degrade_fidel: any ="assets/icones_svg/home/degrade_fidel.svg";
  headphone: any ="assets/icones_svg/home/headphone.svg";
  frios: any ="assets/img/home/ID04.png";
  mercearia: any ="assets/img/home/newmercearia.png";
  carnes: any ="assets/img/home/ID1.png"
  bebidas: any ="assets/img/home/ID07.png";
  newdrinks: any ="assets/img/home/newbebidas.png";
  limpeza: any ="assets/img/home/ID08.png";
  fundo_kit: any ="assets/img/home/banner2.png";
  kit_um: any ="assets/img/home/k1@2x.png";
  kit_dois: any ="assets/img/home/k2@2x.png";
  orcamento: any ="assets/icones_svg/home/orcamento.svg";
  oferta_a: any ="assets/img/home/a.png";
  oferta_b: any ="assets/img/home/b.png";
  oferta_c: any ="assets/img/home/c.png";
  oferta_d: any ="assets/img/home/d.png";
  oferta_e: any ="assets/img/home/e.png";
  oferta_f: any ="assets/img/home/f.png";
  oferta_g: any ="assets/img/home/g.png";
  oferta_h: any ="assets/img/home/h.png";
  compradores: any ="assets/img/home/ID09@2x.png";
  fornecedores: any ="assets/img/home/ID10.png";
  img_fundo: any = 'assets/img/home/banner2.png';
  hortifruit: any = 'assets/img/home/hortifruit.png';
  higiene: any = 'assets/img/home/newhigienepessoal.png';
  cestas: any = 'assets/img/home/cesta_basicas.png';
  institucional: any = 'assets/img/home/institucional.png';
  pet: any = 'assets/img/home/pet.png';
  papelaria: any = 'assets/img/home/papelaria.png';
  descartaveis: any = 'assets/img/home/descartaveis.png';
  prog = "Programa";
  fid = "de Fidelidade";
  

}
