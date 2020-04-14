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
  selecionar(n) {
    var slideIndex;
    slideIndex = 1;
    showDivs(slideIndex = n);
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName('btn_invisivel');
      var dots = document.getElementsByClassName('adicionar');
      if(n > x.length) {slideIndex = 1}
      else { (n < x.length)}
      if(n < 1 ) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].classList.toggle('none');
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('box_yellow', " ")
      }
      x[slideIndex-1].classList.toggle('block');
      dots[slideIndex-1].classList.toggle('box_yellow');
    }

  }
  // selecionar(id) {
  //   document.getElementById(id).classList.toggle('box_yellow');
  // }
  downlist: any = 'assets/icones_svg/atacado/arquivo_lista.svg';
  orcamento:any ="assets/icones_svg/atacado/orcamento_list.svg";
  pesquisar: any ='assets/icones_svg/lupa.svg';

}
