import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../api';
import { Router } from '@angular/router';
import { MustMatch } from '../validacao/validacao_cadatro';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
    registerForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private crudService: CrudService,
        private router: Router) {
      this.registerForm = this.fb.group({
        nome: ['', Validators.required],
        endereco: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
        email: ['', Validators.compose([Validators.required])],
      });
    }
  
  
  // constructor(
  //   private fb: FormBuilder,
  //   private crudService: CrudService,
  //   private router: Router) { 
  //     this.form = this.fb.group({
  //       nome: ['', Validators.required],
  //       endereco: ['', Validators.required],
  //       email: ['', [Validators.required, Validators.email]],
  //       telefone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
  //       senha: ['', [Validators.required, Validators.minLength(6)]],
  //       confirma: ['', Validators.required]
  //     },{
  //       validators: MustMatch('senha', 'confirma')
  //     });
  // }

  ngOnInit(): void {
  }

  saveClientes(values){
    const clientData = new FormData();
    clientData.append('nome', values.nome);
    clientData.append('endereco', values.endereco);
    clientData.append('email', values.email);
    clientData.append('telefone', values.telefone);
    clientData.append('senha', values.senha);
    clientData.append('confirma', values.confirma)
  }

}
