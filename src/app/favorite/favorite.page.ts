import { Categoria } from './../home/categoria.model';
import { PetInfoService } from './../item-details/pet-info.service';
import { LocalStorageService } from './../services/local-storage.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HomeService } from './../home/home.service'; 
import { DataService } from './../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  public id: any;
  
  imagemCategoria = '';


  constructor(
    private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private homeService: HomeService
  ) { }

  get nome() {
    return this.registrationForm.get('nome');
  }

  get imagem() {
    return this.registrationForm.get('imagem');
  }

  registrationForm = this.formBuilder.group ({
    nome: ['',[Validators.required, Validators.maxLength(5)]],
    imagem: ['',[Validators.required, Validators.maxLength(5)]],
  });

  public errorMessages = {
    nome: [
      {type: 'required', message: 'Digite seu nome'},
    ],
    imagem: [
      {type: 'required', message: 'Digite seu nome'},
    ],
  };

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.homeService.readCategoria(this.id).subscribe(categoria => {
      this.imagemCategoria = categoria.imagem;
      this.registrationForm.get('nome').setValue(categoria.nome);
      this.registrationForm.get('imagem').setValue(categoria.imagem);
    });

  }

  update(){
    console.log(this.registrationForm.value);
  }

}
