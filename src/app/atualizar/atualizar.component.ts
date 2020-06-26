import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BancoService } from '../api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.scss']
})
export class AtualizarComponent implements OnInit {
  clienteForm: FormGroup;
  clienteID: any;
  clienteData: any;
  constructor(
    private fb: FormBuilder,
    private bancoService: BancoService,
    private router: Router,
    private actRoute: ActivatedRoute) {
      this.clienteForm = this.fb.group ({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      senha: ['', Validators.required],
      confirma: ['', Validators.required],
      });
     }

  ngOnInit(): void {
  }
  loadClientesDetail(clienteID){
    this.bancoService.getClienteDetails(clienteID).subscribe(client => {
    this.clienteData = client;
    this.clienteForm.controls['nome'].setValue(this.clienteData['p_nome']);
    this.clienteData.controls['endereco'].setValue(this.clienteData['p_endereco']);
    this.clienteData.controls['email'].setValue(this.clienteData['p_email']);
    this.clienteData.controls['telefone'].setValue(this.clienteData['p_telefone']);
    this.clienteData.controls['senha'].setValue(this.clienteData['p_senha']);
    this.clienteData.controls['confirma'].setValue(this.clienteData['p_confirma']);
    });
  }
  atualizarClienteData(values){
    const clienteData = new FormData();
    clienteData.append('id', this.clienteID);
    clienteData.append('nome',values.nome);
    clienteData.append('endereco',values.endereco);
    clienteData.append('email', values.email);
    clienteData.append('telefone',values.telefone);
    clienteData.append('senha', values.senha);
    clienteData.append('confirma',values.confirma);
    this.bancoService.updateCliente(clienteData).subscribe(result=>{
      this.router.navigate(['']);
    })
  }
}
