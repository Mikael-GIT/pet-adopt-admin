import { HomeService } from './../home/home.service';
import { Validators, FormBuilder } from '@angular/forms';
import { LocalStorageService } from './../services/local-storage.service';
import { PetInfoService } from './pet-info.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  selectedSize: number;
  selectedColor: number;
  activeVariation: string;

  public id: string;

  categorias = [
    {
      id: '',
      nome: '',
      imagem: '',
      animais: [
        {
          id: '',
          nome: '',
          sexo: '',
          idade: '',
          vacinado: false,
          porte: '',
          cor: '',
          descricao: '',
          imagem: '',
          raca: '',
          categoria_id: ''
        }
      ]
    }
  ];

  animal = {
    id: '',
    nome: '',
    sexo: '',
    idade: '',
    vacinado: false,
    porte: '',
    cor: '',
    descricao: '',
    imagem: '',
    raca: '',
    vermifugado: false,
    categoria_id: ''
};

  constructor(
    private activatedRoute: ActivatedRoute, 
    private petInfoService: PetInfoService,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder,
    private homeService: HomeService
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    this.activeVariation = 'size';

    this.homeService.readCategorias().subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias);
    });

    this.petInfoService.read(this.id).subscribe(animal => {
      this.localStorageService.set("id_animal", animal.id);
      this.animal = animal;
    });
  }
  get nome() {
    return this.registrationForm.get('nome');
  }

  get sexo() {
    return this.registrationForm.get('sexo');
  }
  get idade() {
    return this.registrationForm.get('idade');
  }
  get vacinado() {
    return this.registrationForm.get('vacinado');
  }
  get porte() {
    return this.registrationForm.get('porte');
  }
  get vermifugado() {
    return this.registrationForm.get('vermifugado');
  }
  get cor() {
    return this.registrationForm.get('cor');
  }
  get descricao() {
    return this.registrationForm.get('descricao');
  }
  get imagem() {
    return this.registrationForm.get('imagem');
  }
  get raca() {
    return this.registrationForm.get('raca');
  }

  get categoria_id() {
    return this.registrationForm.get('categoria_id');
  }



  registrationForm = this.formBuilder.group ({
    nome: ['',[Validators.required, Validators.maxLength(5)]],
    sexo: ['',[Validators.required, Validators.maxLength(5)]],
    idade: ['',[Validators.required, Validators.maxLength(5)]],
    vacinado: ['',[Validators.required, Validators.maxLength(5)]],
    vermifugado: ['',[Validators.required, Validators.maxLength(5)]],
    porte: ['',[Validators.required, Validators.maxLength(5)]],
    cor: ['',[Validators.required, Validators.maxLength(5)]],
    descricao: ['',[Validators.required, Validators.maxLength(5)]],
    imagem: ['',[Validators.required, Validators.maxLength(5)]],
    raca: ['',[Validators.required, Validators.maxLength(5)]],
    categoria_id: ['',[Validators.required, Validators.maxLength(5)]],
  });


  public errorMessages = {
    nome: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    sexo: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    idade: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    vacinado: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    vermifugado: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    porte: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    cor: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    descricao: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    imagem: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    raca: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    categoria_id: [
      {type: 'required', message: 'Digite seu nome'},
    ],
  };



  update(){
    console.log(this.registrationForm.value);
  }
}
