import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable ({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Cachorro',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OMmTpLw7ZKn0NljTFmpac4UPos5Q4kFs1OCANCscEXJBgd-zR1W-ug63k2we9hCJ0RA&usqp=CAU'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Gato',
      image: 'https://img.freepik.com/fotos-premium/gato-vermelho-isolado-em-um-fundo-amarelo_116815-331.jpg?w=1380'
    }


    categories.push(cat1, cat2);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../assets/products/prod-1.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../assets/products/prod-2.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../assets/products/prod-3.png'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../assets/products/prod-4.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../assets/products/prod-5.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../assets/products/prod-6.png'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }
}
