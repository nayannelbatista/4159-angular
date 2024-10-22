import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  private products: Product[] = [
    { id: 1, title: 'Milkshake de morango com baunilha', price: 18, image: 'assets/images/milkshake-morango.png', ingredients: 'Leite, sorvete de baunilha, sorvete de morango, pedaços de morango fresco.', category: 'Milkshakes', imageDetails: 'assets/images/2x/milkshake-morango2x.png' },
    { id: 2, title: 'Milkshake de frutas verdes e hortelã', price: 18, image: 'assets/images/milkshake-frutas-verdes.png', ingredients: 'Leite, sorvete de frutas verdes, folhas de hortelã fresca.', category: 'Milkshakes', imageDetails: 'assets/images/2x/milkshake-frutas-verdes2x.png' },
    { id: 3, title: 'Milkshake de amora com mirtilos', price: 18, image: 'assets/images/milkshake-amora.png', ingredients: 'Leite, sorvete de amora, sorvete de mirtilo, frutas frescas.', category: 'Milkshakes', imageDetails: 'assets/images/2x/milkshake-amora2x.png' },
    { id: 4, title: 'Milkshake de limão e maracujá', price: 18, image: 'assets/images/milkshake-limao.png', ingredients: 'Leite, sorvete de limão, polpa de maracujá.', category: 'Milkshakes', imageDetails: 'assets/images/2x/milkshake-limao2x.png' },
  
    { id: 5, title: 'Sorvete de morango', price: 18, image: 'assets/images/sorvete-morango.png', ingredients: 'Leite, creme de leite, polpa de morango fresco.', category: 'Sorvetes', imageDetails: 'assets/images/2x/sorvete-morango2x.png' },
    { id: 6, title: 'Sorvete de amora', price: 18, image: 'assets/images/sorvete-amora.png', ingredients: 'Leite, creme de leite, purê de amora.', category: 'Sorvetes', imageDetails: 'assets/images/2x/sorvete-amora2x.png' },
    { id: 7, title: 'Sorvete de limão siciliano', price: 18, image: 'assets/images/sorvete-limao.png', ingredients: 'Leite, creme de leite, suco de limão siciliano.', category: 'Sorvetes', imageDetails: 'assets/images/2x/sorvete-limao2x.png' },
    { id: 8, title: 'Sorvete de pistache', price: 18, image: 'assets/images/sorvete-pistache.png', ingredients: 'Leite, creme de leite, pistache triturado.', category: 'Sorvetes', imageDetails: 'assets/images/2x/sorvete-pistache2x.png' },
  
    { id: 9, title: 'Smoothie de caju', price: 18, image: 'assets/images/smoothie-caju.png', ingredients: 'Caju fresco, água de coco, gelo.', category: 'Smoothies', imageDetails: 'assets/images/2x/smoothie-caju2x.png' },
    { id: 10, title: 'Smoothie de framboesa', price: 18, image: 'assets/images/smoothie-framboesa.png', ingredients: 'Framboesa fresca, leite de amêndoas, gelo.', category: 'Smoothies', imageDetails: 'assets/images/2x/smoothie-framboesa2x.png' },
    { id: 11, title: 'Smoothie de kiwi', price: 18, image: 'assets/images/smoothie-kiwi.png', ingredients: 'Kiwi fresco, suco de maçã, gelo.', category: 'Smoothies', imageDetails: 'assets/images/2x/smoothie-kiwi2x.png' },
    { id: 12, title: 'Smoothie de morango', price: 18, image: 'assets/images/smoothie-morango.png', ingredients: 'Morango fresco, iogurte natural, gelo.', category: 'Smoothies', imageDetails: 'assets/images/2x/smoothie-morango2x.png' },
  
    { id: 13, title: 'Capuccino gelado', price: 18, image: 'assets/images/capuccino-gelado.png', ingredients: 'Café expresso, leite, gelo, chantilly.', category: 'Cafés gelados', imageDetails: 'assets/images/2x/capuccino-gelado2x.png' },
    { id: 14, title: 'Café com leite vegetal', price: 18, image: 'assets/images/capuccino-gelado-com-leite-vegetal.png', ingredients: 'Café expresso, leite vegetal, gelo.', category: 'Cafés gelados', imageDetails: 'assets/images/2x/capuccino-gelado-com-leite-vegetal2x.png' },
    { id: 15, title: 'Affogato', price: 18, image: 'assets/images/affogato.png', ingredients: 'Café expresso, sorvete de baunilha.', category: 'Cafés gelados', imageDetails: 'assets/images/2x/affogato2x.png' },
    { id: 16, title: 'Expresso com chantilly', price: 18, image: 'assets/images/expresso-gelado-com-chantilly.png', ingredients: 'Café expresso, chantilly, gelo.', category: 'Cafés gelados', imageDetails: 'assets/images/2x/expresso-gelado-com-chantilly2x.png' }
  ];
  
  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
    // return of(this.products.find(product => product.id === id)).pipe(
    //   delay(3000)
    // );
  }
}
