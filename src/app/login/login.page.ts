import { LocalStorageService } from './../services/local-storage.service';
import { LoginService } from './login.service';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginDados: Login = {
    email: '',
    senha: ''
  };

  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    private loginService: LoginService,
    private serviceLS: LocalStorageService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  load: boolean = false;
  btnLogin: boolean = false;

  login() {
    if (this.loginDados.email != null && this.loginDados.senha != null) {
      //load true
      this.load = true;
      //btn login off
      this.btnLogin = true;

      if (this.loginDados) {
        this.loginService.login(this.loginDados).subscribe(
          (result) => {
            if (result.id != null) {
              this.serviceLS.set('user_id', result.id);
              this.util.setMenuState(true);
              this.navCtrl.navigateRoot('/tabs/tab1', { animationDirection: 'forward' });
            }
          },
          (error) => {
            this.presentToast('top', error.error.message);
          }
        );
      }
      this.load = false;
      this.btnLogin = false;
    }
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
