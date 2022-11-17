import { LocalStorageService } from './../services/local-storage.service';
import { AdoptService } from './adopt.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})



export class CheckoutPage {

  adoptionData = {
    usuario_id: '',
    animal_id: '',
    status: '',
  }

  segmentValue: string;


  user = { 
    id: '',
    idade: '',
    cpf: '',
    profissao: '',
    linkFacebook: '',
    linkInstagram: '',
    possuiOuPossuiuPets: false,
    motivoAdocao: '',
    numResidentesDomicilio: '',
    residentesConcordamAdocao: false,
    teraLivreAcessoAosComodos: false,
    possuiBebeOuPretende: false,
    residentesPossuiAlergia: false,
    isCastrados: false,
    concordaManterInformados: false,
    aceitaVisitasPosAdocao: false,
    adotouoOuDoouUmPet: false,
    tipoResidencia: '',
    ambientePropicioParaCriacao: false,
    
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
    }, adocao: {
      usuario_id: '',
      animal_id: '',
      status: '',
    },
    dataCriacao: '',
  }

  //Dados basicos

  get idade() {
    return this.registrationForm.get('idade');
  }

  get cpf() {
    return this.registrationForm.get('cpf');
  }

  get profissao() {
    return this.registrationForm.get('profissao');
  }

  get linkFacebook() {
    return this.registrationForm.get('linkFacebook');
  }

  get linkInstagram() {
    return this.registrationForm.get('linkInstagram');
  }

  //Endereco
  get cep() {
    return this.registrationForm.get('cep');
  }

  get logradouro() {
    return this.registrationForm.get('logradouro');
  }

  get numero() {
    return this.registrationForm.get('numero');
  }
  

  get complemento() {
    return this.registrationForm.get('complemento');
  }

  get bairro() {
    return this.registrationForm.get('bairro');
  }

  get cidade() {
    return this.registrationForm.get('cidade');
  }

  get possuiOuPossuiuPets() {
    return this.registrationForm.get('possuiOuPossuiuPets');
  }

  get motivoAdocao() {
    return this.registrationForm.get('motivoAdocao');
  }

  get numResidentesDomicilio() {
    return this.registrationForm.get('numResidentesDomicilio');
  }

  get residentesConcordamAdocao() {
    return this.registrationForm.get('residentesConcordamAdocao');
  }

  get teraLivreAcessoAosComodos() {
    return this.registrationForm.get('teraLivreAcessoAosComodos');
  }

  get possuiBebeOuPretende() {
    return this.registrationForm.get('possuiBebeOuPretende');
  }

  get residentesPossuiAlergia() {
    return this.registrationForm.get('residentesPossuiAlergia');
  }
  
  get isCastrados() {
    return this.registrationForm.get('isCastrados');
  }

  get concordaManterInformados() {
    return this.registrationForm.get('concordaManterInformados');
  }

  get aceitaVisitasPosAdocao() {
    return this.registrationForm.get('aceitaVisitasPosAdocao');
  }

  get adotouoOuDoouUmPet() {
    return this.registrationForm.get('adotouoOuDoouUmPet');
  }
  
  get tipoResidencia() {
    return this.registrationForm.get('tipoResidencia');
  }

  get ambientePropicioParaCriacao() {
    return this.registrationForm.get('ambientePropicioParaCriacao');
  }


  public errorMessages = {
    idade: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    cpf: [
      {type: 'required', message: 'Digite seu CPF'},
      {type: 'maxlength', message: 'CPF não pode passar de 11 Caracteres'}
    ],
    profissao: [
      {type: 'required', message: 'Digite sua profissao'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    linkFacebook: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    linkInstagram: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    cep: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    logradouro: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    numero: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    complemento: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    bairro: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    cidade: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    possuiOuPossuiuPets: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    motivoAdocao: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    numResidentesDomicilio: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    residentesConcordamAdocao: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    teraLivreAcessoAosComodos: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    possuiBebeOuPretende: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    residentesPossuiAlergia: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    isCastrados: [
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    concordaManterInformados: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    aceitaVisitasPosAdocao: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    adotouoOuDoouUmPet: [
      {type: 'required', message: 'Digite seu nome'},
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    tipoResidencia: [
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ],
    ambientePropicioParaCriacao: [
      {type: 'maxlength', message: 'Nome não pode passar de 50 Caracteres'}
    ]
  };

  registrationForm = this.formBuilder.group ({
    idade: ['',[Validators.required, Validators.maxLength(5)]],
    cpf: ['',[Validators.required, Validators.maxLength(11)]],
    profissao: ['',[Validators.required, Validators.maxLength(5)]],
    linkFacebook: ['',[Validators.required, Validators.maxLength(5)]],
    linkInstagram: ['',[Validators.required, Validators.maxLength(5)]],
    cep: ['',[Validators.required, Validators.maxLength(5)]],
    logradouro: ['',[Validators.required, Validators.maxLength(5)]],
    numero: ['',[Validators.required, Validators.maxLength(5)]],
    complemento: ['',[Validators.required, Validators.maxLength(5)]],
    bairro: ['',[Validators.required, Validators.maxLength(5)]],
    cidade: ['',[Validators.required, Validators.maxLength(5)]],
    possuiOuPossuiuPets: ['',[Validators.required, Validators.maxLength(5)]],
    motivoAdocao: ['',[Validators.required, Validators.maxLength(5)]],
    numResidentesDomicilio: ['',[Validators.required, Validators.maxLength(5)]],
    residentesConcordamAdocao: ['',[Validators.required, Validators.maxLength(5)]],
    teraLivreAcessoAosComodos: ['',[Validators.required, Validators.maxLength(5)]],
    possuiBebeOuPretende: ['',[Validators.required, Validators.maxLength(5)]],
    residentesPossuiAlergia: ['',[Validators.required, Validators.maxLength(5)]],
    isCastrados: ['',[Validators.maxLength(5)]],
    concordaManterInformados: ['',[Validators.required, Validators.maxLength(5)]],
    aceitaVisitasPosAdocao: ['',[Validators.required, Validators.maxLength(5)]],
    adotouoOuDoouUmPet: ['',[Validators.required, Validators.maxLength(5)]],
    tipoResidencia: ['',[Validators.maxLength(50)]],
    ambientePropicioParaCriacao: ['',[Validators.maxLength(5)]],
  });

  constructor(private formBuilder: FormBuilder, private adoptService: AdoptService, private localStorageService: LocalStorageService) {}

  public submit() {
    console.log("cheguei aqui")
    this.saveProfileData(this.registrationForm.value);
    this.adopt();

  }


  saveProfileData(profileData: any){
    this.adoptService.updateProfile(profileData).subscribe(user => console.log(user));
  }

  adopt(){
    this.adoptionData.animal_id = this.localStorageService.get("id_animal");
    this.adoptionData.usuario_id = this.localStorageService.get("user_id");
    this.adoptionData.status = "Solicitado";
    this.adoptService.adopt(this.adoptionData).subscribe(adoption => {
      console.log(adoption);
    });
  }
  
}