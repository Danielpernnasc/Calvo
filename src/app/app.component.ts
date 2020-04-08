import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './validacao/validacao_cadatro';




declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  submitted_news = false;

  constructor(private modalService: ModalService, private router: Router, private formBuilder: FormBuilder) { };
  Footer = true;

ngOnInit(){
  this.router.events
  .subscribe((event) => {
    if(event instanceof NavigationEnd) {
      this.Footer = (event.url !== '/newsletter')
    }
  });
  $(".close-nav").click(function(){
    // console.log('Click')
    if($(".dropdown-content").hasClass("show")){
        $(".dropdown-content").removeClass("show");
    }
  });

  $('.color_link').click(function(){
  $('.color_link').removeClass('fixed_color');
  $(this).addClass('fixed_color');
  $('.color_link').val($(this)[0].innerText);
  });
  
  this.registerForm = this.formBuilder.group({
    Name: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    emailnews: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, {
    validators: MustMatch('password', 'confirmPassword')
  });

}
  get f() {return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;

    if(this.registerForm.invalid) {
      return;
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal (id: string) {
    this.modalService.close(id);
  }
  onClick_atacado(){
    document.getElementById("myDropdown_atacado").classList.toggle("show");
  };
  onClick_contato(){
    document.getElementById("myDropdown_contato").classList.toggle("show");
  };


  cartoes:any ="assets/img/ID11.png";
  logo:any ="assets/img/logo.png";
  lupa:any ="assets/icones_svg/lupa.svg";
  apple:any ="assets/icones_svg/apple.svg";
  android:any ="assets/icones_svg/android.svg";
  orcamento:any ="assets/icones_svg/icone_comprar.svg";
  setadow:any ="assets/icones_svg/seta_expandir.svg";
  instagram:any ="assets/icones_svg/instagram.svg";
  facebook:any ="assets/icones_svg/facebook.svg";
  whatsapp:any ="assets/icones_svg/whatsapp.svg";
  degrade_fidel: any ="assets/icones_svg/degrade_fidel.svg";
  ok:any = 'assets/icones_svg/check_icon.svg';

  new ="Novo Usuário?";
  conta="Criar Conta";
  user ="Já é Usuário?";
  l = 'Login';
  s = 'Senha';
  rs = 'Repita Senha';
  cr = 'CRIE sua conta ou REGISTRE-SE';
  CN = 'Cadastre-se em nossa Newsletter';
  need = "Digite seu e-mail";
  error = "e-mail inválido";
  sucess ="E-mail cadastrado com sucesso."
  

}

