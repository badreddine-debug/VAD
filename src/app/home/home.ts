import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ListProducts } from '../Products/list-products/list-products';
import { AddAndUpdateProducts } from '../Products/add-and-update-products/add-and-update-products';

@Component({
  selector: 'app-home',
  imports: [ListProducts],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home {}
