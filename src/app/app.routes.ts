import { Routes } from '@angular/router';
import { Authentification } from './authentification/authentification';
import { Home } from './home/home';
import { authGuard } from './guards/auth-guard';
import { logoutGuard } from './guards/logoutGuard';
import { ListProducts } from './Products/list-products/list-products';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Authentification, canActivate: [logoutGuard] },
  { path: 'home', component: Home, canActivate: [authGuard] },
];
