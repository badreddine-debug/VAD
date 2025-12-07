import { Component, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { RegledeGestion, SearchProduit } from '../../Model/SearchProduit';
import { ProductService } from '../../Service/Products/product-service';
import { form, Field, submit, customError } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-and-update-products',
  imports: [Field, CommonModule],
  templateUrl: './add-and-update-products.html',
  styleUrl: './add-and-update-products.css',
  standalone: true,
})
export class AddAndUpdateProducts {
  messageSucess = signal('');
  serviceProduct = inject(ProductService);
  saveProduit = signal<SearchProduit>({ name: '', price: 0, stock: 0 });
  protected readonly FormSaveProduit = form(this.saveProduit, RegledeGestion);
  constructor() {}

  SaveProduct(event: Event) {
    event.preventDefault();

    submit(this.FormSaveProduit, async () => {
      return Promise.resolve([
        customError({ kind: 'ProblemeFormulaire', message: 'il faut bien saisir les champ' }),
      ]);
    });

    this.serviceProduct.SaveProduct(this.FormSaveProduit().value()).subscribe({
      next: (x) => {
        console.log(x);
        this.saveProduit.set({ name: '', stock: 0, price: 0 });
        this.messageSucess.set('Les données sont bien sauvegarde au niveau base de données');
        return x;
      },
      error: (err) => {
        console.log(err);
        this.messageSucess.set('Probléme de sauvegarde au niveau base de donnée');
        return err;
      },
    });
  }
}
