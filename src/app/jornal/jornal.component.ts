import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jornal',
  templateUrl: './jornal.component.html',
  styleUrls: ['./jornal.component.scss']
})
export class JornalComponent implements OnInit {
  logo:any ='assets/img/jornal/logo_ew.png';
  tabloide:any ='assets/icones_svg/jornal/tabloid.svg'

  constructor() { }

  ngOnInit() {
  }

}
