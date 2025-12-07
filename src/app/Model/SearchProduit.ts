import { max, min, required, schema } from '@angular/forms/signals';

export interface SearchProduit {
  name: string;
  stock: number;
  price: number;
}

export const RegledeGestion = schema<SearchProduit>((context) => {
  required(context.name, { message: 'le champ nom de produit est obligatoire' });
  min(context.stock, 1, { message: 'le champ stock sera supérieur à 0' });
  max(context.stock, 1000, { message: 'le champ stock sera inférieur à 1000' });
  min(context.price, 100, { message: 'le champ stock sera supérieur à 0' });
  max(context.price, 10000, { message: 'le champ stock sera inférieur à 1000' });
});
