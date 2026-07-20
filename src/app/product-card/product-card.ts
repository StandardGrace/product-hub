import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'] // or template fallback style
})
export class ProductCardComponent {
  @Input() productData: any;
}