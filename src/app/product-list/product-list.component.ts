import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products];

  share(link:string|URL|undefined) {
    window.open("https://t.me/+MFuXEyqTAi00NzQy" + link,'menubar=off, toolbar=off');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
