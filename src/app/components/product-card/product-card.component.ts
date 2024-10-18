import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatCard, 
    MatCardContent, 
    MatCardActions
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input() title!: string;
  @Input() price!: number;
  @Input() image!: string;

  @Output() viewDetails = new EventEmitter<void>();

  onDetailsClick(): void {
    this.viewDetails.emit();
  }
}

