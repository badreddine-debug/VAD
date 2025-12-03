import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ListProducts } from '../Products/list-products/list-products';

@Component({
  selector: 'app-home',
  imports: [Header, ListProducts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
