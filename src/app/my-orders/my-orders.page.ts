import { HomeService } from './../home/home.service';
import { DataService } from './../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from './../home/categoria.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Payment } from './payment.model';
import { User } from './../checkout/user.model';
import { Profile } from './../profile/profile.model';
import { LocalStorageService } from './../services/local-storage.service';
import { ProfileService } from './../profile/profile.service';
import { PaymentService } from './payment.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];


  dataDisatnce: any;
  id: string = "0";

  categoria: Categoria;

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

  animais = [
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
      status: '',
      categoria_id: ''
    }
  ];

  constructor(
    private router: Router,
    private data: DataService,
    private homeService: HomeService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.animais = [];

    this.homeService.getDistance().subscribe(data =>{
      this.dataDisatnce = data.value
      console.log(this.data)
    }
    );

    this.homeService.readCategorias().subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias);
    });


    this.homeService.readCategoria("1").subscribe(categoria => {
      categoria.animais.forEach(animal => this.animais.push(animal));
      console.log(this.animais);
    });
;

    this.categories = this.data.getCategories();
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();
  }

  showPetInfo(id: string){
    this.router.navigate([`item-details/${id}`]);
  }

  changeCategory(categoria: Categoria){
    this.animais = [];
    this.homeService.readCategoria(categoria.id).subscribe(categoria => {
      categoria.animais.forEach(animal => this.animais.push(animal));
    });;
  }

  avancar(){
    console.log("chegou aqui")
    this.router.navigate(['/item-details']);
  }
}
