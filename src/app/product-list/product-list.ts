import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = [
  { id: 1, name: 'Wireless Mechanical Keyboard', price: 129.99, inStock: true },
  { id: 2, name: 'Noise Cancelling Headphones', price: 199.99, inStock: false },
  { id: 3, name: 'Ergonomic Wireless Mouse', price: 49.99, inStock: true }
  ];

  cartCount: number = 0;

    addToCart() {
    this.cartCount++;
  }
}
 