import { Routes } from '@angular/router';
import { Authentification } from './authentification/authentification';
import { Home } from './home/home';
import { authGuard } from './guards/auth-guard';
import { logoutGuard } from './guards/logoutGuard';
import { ListProducts } from './Products/list-products/list-products';
import { AddAndUpdateProducts } from './Products/add-and-update-products/add-and-update-products';
import { headerGuard } from './guards/header.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Authentification, canActivate: [logoutGuard, headerGuard] },
  { path: 'home', component: Home, canActivate: [authGuard, headerGuard] },
  {
    path: 'product',
    canActivate: [authGuard, headerGuard],
    children: [
      {
        path: 'list',
        component: ListProducts, // child component
        canActivate: [authGuard, headerGuard],
      },
      {
        path: 'add',
        component: AddAndUpdateProducts, // child component
        canActivate: [authGuard, headerGuard],
      },
    ],
  },
];
