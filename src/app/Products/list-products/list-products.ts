import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../Service/Products/product-service';
import { Products } from '../../Model/Products';
import { NgClass } from '../../../../node_modules/@angular/common/types/_common_module-chunk';
import { SearchProduct } from '../search-product/search-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  imports: [SearchProduct],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css',
  standalone: true,
})
export class ListProducts {
  serviceProduct = inject(ProductService);
  listProduct = signal<Products[]>([]);
  route = inject(Router);

  constructor() {
    this.serviceProduct.getListProducts().subscribe((products) => {
      this.listProduct.set(products);
    });
  }

  Ajouter(): void {
    console.log('fddsf');
    this.route.navigate(['/product/add']);
  }
}
