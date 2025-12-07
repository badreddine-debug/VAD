import { Component, EventEmitter, inject, Input, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { SearchProduit } from '../../Model/SearchProduit';
import { ProductService } from '../../Service/Products/product-service';
import { Products } from '../../Model/Products';

@Component({
  selector: 'app-search-product',
  imports: [Field],
  templateUrl: './search-product.html',
  styleUrl: './search-product.css',
})
export class SearchProduct {
  serviceProduct = inject(ProductService);
  products = signal<SearchProduit>({ name: '', stock: 0, price: 0 });
  protected readonly shearchForm = form(this.products);
  @Input() ListSearchProduit = signal<Products[]>([]);

  SearchProduit(event: Event) {
    event.preventDefault();
    this.serviceProduct.SearchProducts(this.shearchForm().value()).subscribe({
      next: (res) => {
        this.ListSearchProduit.set(res);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
