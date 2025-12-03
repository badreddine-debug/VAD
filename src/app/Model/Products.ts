export class Products {
  id: number;
  name: string;
  price: number;
  creationDate: Date;
  stock: number;

  constructor(data: Partial<Products>) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.price = data.price || 0;
    this.creationDate = data.creationDate || new Date();
    this.stock = data.stock || 0;
  }
}
