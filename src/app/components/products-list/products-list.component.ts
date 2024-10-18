import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatList, MatListItem } from '@angular/material/list';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    MatGridList,
    MatGridTile,
    MatList,
    MatListItem
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  productsByCategory: { category: string, products: any[] }[] = [];

  constructor(private productService: ProductService, private router: Router) {
    const products = this.productService.getProducts();
    this.groupProductsByCategory(products);
  }

  groupProductsByCategory(products: any[]) {
    const categories = [...new Set(products.map(product => product.category))];
    this.productsByCategory = categories.map(category => ({
      category,
      products: products.filter(product => product.category === category)
    }));
  }

  goToDetails(productId: number) {
    this.router.navigate(['/details', productId]);
  }
}

