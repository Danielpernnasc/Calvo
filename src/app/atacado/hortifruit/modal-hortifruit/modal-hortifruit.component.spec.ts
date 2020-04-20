import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHortifruitComponent } from './modal-hortifruit.component';

describe('ModalHortifruitComponent', () => {
  let component: ModalHortifruitComponent;
  let fixture: ComponentFixture<ModalHortifruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHortifruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHortifruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
