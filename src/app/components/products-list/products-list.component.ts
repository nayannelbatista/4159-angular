import { afterNextRender, Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

import { AppShellNoRenderDirective } from '../../directives/app-shell-no-render.directive';
import { AppShellRenderDirective } from '../../directives/app-shell-render.directive';
import { Product } from '../../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    AppShellNoRenderDirective,
    AppShellRenderDirective,
    CommonModule,
    MatProgressSpinnerModule,
    ProductCardComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  offers: string[] = [];
  productsByCategory: { category: string, products: Product[] }[] = [];
  //private productService = inject(ProductService) outra forma de DI

  constructor(
    private productService: ProductService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object) {
    afterNextRender(() => {
      this.getCurrentLocation();
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.getCurrentLocation();
    }

    if (isPlatformServer(this.platformId)) {
      console.log('Este código está sendo executado no servidor.');
    }
    const products = this.productService.getProducts();
    this.groupProductsByCategory(products);
  }

  groupProductsByCategory(products: Product[]) {
    const categories = [...new Set(products.map(product => product.category))];
    this.productsByCategory = categories.map(category => ({
      category,
      products: products.filter(product => product.category === category)
    }));
  }

  private getCurrentLocation(): void {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            console.log('Latitude:', position.coords.latitude);

            this.getOffersBasedOnLocation(position.coords.latitude);
          },
          error => {
            console.error('Erro ao obter geolocalização:', error);
          }
        );
      } else {
        console.error('Geolocalização não suportada no navegador.');
      }
    } catch (error) {
      console.error('Erro ao acessar a geolocalização no servidor:', error);
    }
  }

  private getOffersBasedOnLocation(latitude: number): void {
    this.filteredProducts = this.products.filter(product => {
      return latitude > 0 && product.category === 'Milkshakes';
    });

    if (latitude < -23) {
      this.offers = ['Oferta para a região Sul: 20% de desconto no milkshake de morango'];
    } else if (latitude < -10) {
      this.offers = ['Oferta para a região Sudeste: 15% de desconto no milkshake de frutas verdes'];
    } else if (latitude >= -10 && latitude < 0) {
      this.offers = ['Oferta para a região Nordeste: 25% de desconto no milkshake de amora'];
    } else {
      this.offers = ['Oferta: 10% de desconto no milkshake de limão'];
    }
  }

  goToDetails(productId: number) {
    this.router.navigate(['/details', productId]);
  }
}

