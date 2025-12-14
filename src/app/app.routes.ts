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
  {
    path: 'login',
    canActivate: [logoutGuard, headerGuard],
    loadComponent: () =>
      import('./authentification/authentification').then((x) => x.Authentification),
  },
  {
    path: 'home',
    canActivate: [authGuard, headerGuard],
    loadComponent: () => import('./home/home').then((x) => x.Home),
  },
  {
    path: 'product',
    canActivate: [authGuard, headerGuard],
    children: [
      {
        path: 'list',
        canActivate: [authGuard, headerGuard],
        loadComponent: () =>
          import('./Products/list-products/list-products').then((x) => x.ListProducts),
      },
      {
        path: 'add',
        canActivate: [authGuard, headerGuard],
        loadComponent: () =>
          import('./Products/add-and-update-products/add-and-update-products').then(
            (x) => x.AddAndUpdateProducts
          ),
      },
    ],
  },
];
