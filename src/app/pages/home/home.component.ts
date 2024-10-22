import { Component, inject, OnInit } from '@angular/core';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.setPageMeta();
  }

  setPageMeta(): void {
    this.title.setTitle('Deleite - a melhor experiência de sabores!');
    this.meta.addTags([
      { name: 'description', content: 'Descubra os melhores milkshakes, sorvetes e smoothies na Deleite. Sabor e qualidade em cada produto!' },
      { property: 'og:title', content: 'Deleite - a melhor experiência de sabores!' },
      { property: 'og:description', content: 'Descubra os melhores milkshakes, sorvetes e smoothies na Deleite. Sabor e qualidade em cada produto!' },
      { property: 'og:image', content: 'assets/images/logo.png' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }
  
}
