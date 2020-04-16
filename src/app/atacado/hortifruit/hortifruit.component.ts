import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hortifruit',
  templateUrl: './hortifruit.component.html',
  styleUrls: ['./hortifruit.component.scss']
})
export class HortifruitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pesquisar:any ="assets/icones_svg/lupa.svg";
}
