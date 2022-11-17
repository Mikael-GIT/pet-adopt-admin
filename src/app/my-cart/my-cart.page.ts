import { HomeService } from './../home/home.service';
import { DataService } from './../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {


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

  constructor(
    private router: Router,
    private data: DataService,
    private homeService: HomeService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.homeService.readCategorias().subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias);
    });
  }


  showCategoryInfo(id: string){
    this.router.navigate([`favorite/${id}`]);
  }
}
