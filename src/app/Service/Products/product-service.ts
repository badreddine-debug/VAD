import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../Model/Products';
import { SearchProduit } from '../../Model/SearchProduit';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private UrlListProduct = 'http://localhost:5000/api/Products/GetProducts';
  private UrlSearchProduct = 'http://localhost:5000/api/Products/SearchListProducts';
  private UrlSaveProduct = 'http://localhost:5000/api/Products/InsertProduct';
  private http = inject(HttpClient);

  getListProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.UrlListProduct);
  }

  SearchProducts(searchProduit: SearchProduit): Observable<Products[]> {
    let Produit = new Products({});
    Produit.name = searchProduit.name;
    Produit.price = searchProduit.price;
    Produit.stock = searchProduit.stock;
    return this.http.post<Products[]>(this.UrlSearchProduct, Produit);
  }

  SaveProduct(SaveProduct: SearchProduit): Observable<boolean> {
    let Produit = new Products({});
    Produit.name = SaveProduct.name;
    Produit.price = SaveProduct.price;
    Produit.stock = SaveProduct.stock;

    return this.http.post<boolean>(this.UrlSaveProduct, Produit);
  }
}
