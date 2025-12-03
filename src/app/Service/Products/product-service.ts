import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../Model/Products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private myUrl = 'http://localhost:5000/api/Products/GetProducts';
  private http = inject(HttpClient);

  getListProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.myUrl);
  }
}
