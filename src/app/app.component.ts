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
  registroFormu: FormGroup;
  registerFormLogin: FormGroup;
  submitted = false;
  submittednews = false;
  submittedlogin = false;


  constructor(private modalService: ModalService, private router: Router, private formBuilder: FormBuilder) { };
  Footer = true;

ngOnInit(){
  var dropdown = document.getElementsByClassName("link_mob_btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function() {
    this.classList.toggle("active_mob");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
    })
  }
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

  // $('.color_link').click(function(){
  // $('.color_link').removeClass('fixed_color');
  // $(this).addClass('fixed_color');
  // $('.color_link').val($(this)[0].innerText);
  // });

  this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  }, {
    validators: MustMatch
  });
  this.registroFormu = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  },{
     validators: MustMatch('password', 'confirmPassword')
  });
  this.registerFormLogin = this.formBuilder.group({
    login: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required]
  }, {
     validators: MustMatch
  });
}
get f() { return this.registerForm.controls; }
get g() { return this.registroFormu.controls; }
get h() { return this.registerFormLogin.controls; }

onSubmit_newsletter() {
  this. submittednews = true;
  if (this.registerForm.invalid) {
    return;
  }
  document.getElementById('sucesso').classList.toggle("show_ok");
  document.getElementById('esconder_form').classList.toggle("form_esconder");
}
onSubmit() {
  this.submitted = true;
  if (this.registroFormu.invalid) {
    return;
  }
}
onSubmitLogin() {
  this.submittedlogin = true;
  if (this.registerFormLogin.invalid) {
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
  orcamento_produtos() {
    this.router.navigateByUrl('orcamento');
  }
 whatsapp_btn() {
   window.open('https://web.whatsapp.com/send?phone=5511985960096&text=')
 }
 openNav() {
  document.getElementById("mySidenav").style.width = "200px";
 }
 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
 }
 facebooksocial() {
  window.open('https://www.facebook.com/calvoatac')
}
instagramsocial() {
  window.open('https://www.instagram.com/calvoatacadista/')
}
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
  seta_baixo:any = 'assets/icones_svg/seta-para-baixo.svg';
  icone_orca:any = "assets/icones_svg/orcamento_list.svg";

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
  sucess ="E-mail cadastrado com sucesso.";
  address_calvo = "Av. Rio das Pedras, 2118 - Jd. Aricanduva - PABX 2723-6000"
  

}

