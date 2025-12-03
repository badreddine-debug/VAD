import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../Service/Products/product-service';
import { Products } from '../../Model/Products';

@Component({
  selector: 'app-list-products',
  imports: [],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css',
})
export class ListProducts {
  serviceProduct = inject(ProductService);
  listProduct = signal<Products[]>([]);

  constructor() {
    this.serviceProduct.getListProducts().subscribe((products) => {
      this.listProduct.set(products);
    });
  }
}
