import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input() image!: string;
  @Input() price!: number;
  @Input() title!: string;

  @Output() viewDetails = new EventEmitter<void>();

  onDetailsClick(): void {
    this.viewDetails.emit();
  }
}

