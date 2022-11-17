import { Validators, FormBuilder } from '@angular/forms';
import { LocalStorageService } from './../services/local-storage.service';
import { Router } from '@angular/router';
import { Cadastro } from './cadastro.model';
import { CadastroService } from './cadastro.service';
import { LoginService } from './../login/login.service';
import { NavController, ToastController } from '@ionic/angular';
import { UtilService } from './../util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  cadastroDados: Cadastro = {
    login: '',
    senha: '',
    email: '',
    telefone: '',
    nome: ''

  };

  public errorMessages = {
    nome: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    telefone: [
      {type: 'required', message: 'Digite seu telefone'},
      {type: 'minlength', message: 'Telefone inválido'}
    ],
    email: [
      {type: 'required', message: 'Digite seu email'}
    ],
    senha: [
      {type: 'required', message: 'Digite sua senha'},
      {type: 'maxlength', message: 'Senha não pode ser maior que 30 digitos'}
    ]
  };

  
  get nome() {
    return this.registrationForm.get('nome');
  }

  get telefone() {
    return this.registrationForm.get('telefone');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get senha() {
    return this.registrationForm.get('senha');
  }


  
  registrationForm = this.formBuilder.group ({
    nome: ['',[Validators.required, Validators.maxLength(50)]],
    telefone: ['',[Validators.required, Validators.minLength(11)]],
    email: ['',[Validators.required]],
    senha: ['',[Validators.required, Validators.maxLength(30)]]
  });

  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    private cadastroService: CadastroService,
    private toastController: ToastController,
    private router: Router,
    private serviceLS: LocalStorageService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }


  cadastrar(){
    console.log(this.registrationForm.value);
    this.cadastroService.create(this.registrationForm.value).subscribe(
      (result) => {
        if (result.id != null) {
          this.serviceLS.set("user_id", result.id);
          this.presentToast('top', "Cadastro realizado com sucesso!");
          this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
        }
      },
      (error) => {
        this.presentToast('bottom',error.error.message);
      }
    );
  }



  async presentToast(position: 'top' | 'middle' | 'bottom', msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}
