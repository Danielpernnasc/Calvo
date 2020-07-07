import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './validacao/validacao_cadatro';
import { BancoService } from './api';



declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent implements OnInit {
  public maskfone = ['(',/[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskfixo = ['(',/[1-8]/, /\d/, ')', ' ', /\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
  public maskcep = [/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/];
  registerFormNews: FormGroup;
  registroFormu: FormGroup;
  registerFormLogin: FormGroup;
  clienteForm: FormGroup;
  submitted = false;
  submittednews = false;
  loginbtn: boolean;
  logoutbtn: boolean;
  submittedlogin = false;

  UF: any = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

  constructor(private modalService: ModalService, private bancoService: BancoService, private router: Router, private fbnew: FormBuilder, private fbregister: FormBuilder, private fblogin: FormBuilder, private fb: FormBuilder) 
  {
    this.clienteForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      rua: ['', Validators.required],
      numero: [''],
      complemento: [''],
      bairro:['', Validators.required],
      cep: ['', Validators.required],
      fixo: [''],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirma: ['', Validators.required]
    },{
      validators: MustMatch('senha', 'confirma')
    });
    this.registerFormNews = this.fbnew.group({
      email: ['', [Validators.required, Validators.email]],
    }, {
      validators: MustMatch
    });
    }


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

  this.registerFormLogin = this.fblogin.group({
    login: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required]
  });
}


get f() { return this.registerFormNews.controls; }
get g() { return this.clienteForm.controls; }
get uf() { return this.clienteForm.get('uf'); }
get h() { return this.registerFormLogin.controls; }

saveClientes(values){
  const clienteData = new FormData();
  clienteData.append('nome', values.nome);
  clienteData.append('sobrenome', values.sobrenome);
  clienteData.append('rua', values.rua);
  clienteData.append('numero', values.numero);
  clienteData.append('complemento', values.complemento);
  clienteData.append('bairro',values.bairro);
  clienteData.append('cep', values.cep);
  clienteData.append('cidade',values.cidade);
  clienteData.append('uf', values.uf);
  clienteData.append('email', values.email);
  clienteData.append('telefone', values.telefone);
  clienteData.append('fixo', values.fixo);
  clienteData.append('senha', values.senha);
  clienteData.append('confirma', values.confirma);
  this.bancoService.createClient(clienteData).subscribe(result => 
  {
    this.router.navigate(['']);
  });
    this.submitted = true;
      if (this.clienteForm.invalid) {
        return;
      } 
      document.getElementById('sucesso_dados').classList.toggle("show_ok");
      document.getElementById('esconder_cadastro').classList.toggle("esconder_form_conta");
}
clearForm(form: FormGroup) {
  form.reset();
}
changeState(e) {
  console.log(e.value)
  this.uf.setValue(e.target.value), {
    onlySelf: true
  }
}
onSubmit_newsletter(values) {
  const newsData = new FormData();
  newsData.append('email', values.email);
  this.bancoService.createNews(newsData).subscribe(result => 
  {
    this.router.navigate(['']);
  });
  this. submittednews = true;
  if (this.registerFormNews.invalid) {
    return;
  }
  document.getElementById('sucesso').classList.toggle("show_ok");
  document.getElementById('esconder_form').classList.toggle("form_esconder");
}




onSubmitLogin() {
  // this.bancoservicecalvo.userlogin(registerFormLogin1.value.login,registerFormLogin1.value.password)
  //   .pipe(first())
  //   .subscribe(
  //   data => {
  //     const redirect = this.bancoservicecalvo.redirectUrl? this.bancoservicecalvo.redirectUrl : '/dashboard';
  //     this.router.navigate([redirect]);
  //   },
  //   error => {
  //     alert("Usuario ou senha está incorreto")
  //   });
  this.submittedlogin = true;
  if (this.registerFormLogin.invalid) {
    return;
  }
}
// get login() { return this.registerFormLogin.get('login'); } 
// get senha() { return this.registerFormLogin.get ('senha'); }

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
  error = "O e-mail está inválido";
  sucess ="E-mail cadastrado com sucesso.";
  address_calvo = "Av. Rio das Pedras, 2118 - Jd. Aricanduva - PABX 2723-6000"
  n ="Nome";
  sn = "Sobrenome"
  dn = "Digite seu Nome!";
  dsn = "Digite seu Sobrenome!";
  end = "Endereço";
  drua = "Digite a rua!";
  em = "E-mail";
  dem = "Digite seu e-mail!"
  dvalem = "O precisa ser um e-mail válido como: 'email@email.com.br'";
  tel = "Telefone";
  dtel = "Digite seu Telefone de 9 dígitios";
  ds = "Digite uma senha de 6 a 10 digítos";
  dsseis = "A senha precisa ter no mínimo 6 caracteres";
  cs = "Digite a senha novamente!";
  spiden = "A senha precisa ser identica."
  sucess_dados = "Dados enviado com sucesso."
  validar = "Entre no seu e-mail cadastrado para validar o cadastro."

}

