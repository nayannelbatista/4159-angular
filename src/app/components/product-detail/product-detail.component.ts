import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Meta, Title } from '@angular/platform-browser';

import { AppShellNoRenderDirective } from '../../directives/app-shell-no-render.directive';
import { AppShellRenderDirective } from '../../directives/app-shell-render.directive';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    AppShellNoRenderDirective,
    AppShellRenderDirective,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    RouterLink
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  quantities: number[] = [1, 2, 3, 4, 5];
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    const productId = parseInt(this.route.snapshot.paramMap.get('id') ?? '0', 10);
    this.productService.getProductById(productId).subscribe(product => {
      if (!product) {
        console.error('Product not found');
        return;
      }
      this.product = product;
    });
    this.setPageMeta();
  }

  setPageMeta() {
    this.title.setTitle(`${this.product.title} - Detalhes do produto`);
    this.meta.addTags([
      { name: 'description', content: this.product.ingredients },
      { property: 'og:title', content: this.product.title },
      { property: 'og:description', content: this.product.ingredients },
      { property: 'og:image', content: this.product.imageDetails },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }
}
