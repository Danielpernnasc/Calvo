import { Component, OnInit, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import { ModalhortifruitService } from './modalhortifruit.service';

@Component({
  selector: 'modal-hortifruit',
  templateUrl: './modal-hortifruit.component.html',
  styleUrls: ['./modal-hortifruit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalHortifruitComponent implements OnInit {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalhortifruitService, private el: ElementRef) { 
              this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('O modal precisa de Id');
      return;
    }
    document.body.appendChild(this.element);

    this.element.addEventListener('click', el => {
      if (el.target.className === 'modal_produto') {
        this.close();
      }
    });
    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('container_body');
  }
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('container_body');
  }

}
