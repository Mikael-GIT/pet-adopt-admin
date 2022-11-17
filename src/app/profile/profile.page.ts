import { Profile } from './profile.model';
import { ProfileService } from './profile.service';
import { LocalStorageService } from './../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile: Profile = { 
    id: '',
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
    }
  }

  constructor(private profileService: ProfileService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.getProfileById();
  }

  getProfileById(){

    this.profileService.getProfileById(this.localStorageService.get("user_id")).subscribe(profile => {
      console.log(profile);
      this.profile = profile}
      );
  }

}
