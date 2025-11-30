import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class logoutGuard implements CanActivate {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  canActivate(): boolean {
    // Vérifier si on est dans le navigateur (pas côté serveur)
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');

      // Si l'utilisateur est connecté, on le redirige vers /home
      if (token) {
        this.router.navigate(['/home']);
        return false;
      }

      return true; // sinon accès autorisé à /login
    }

    // Côté serveur : ne jamais bloquer (localStorage absent)
    return true;
  }
}
