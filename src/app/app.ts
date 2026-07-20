import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ProductList } from './product-list/product-list';
import { DataForm } from './data-form/data-form';
import { DataList } from './data-list/data-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, ProductList, DataForm, DataList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('product-hub');
}
