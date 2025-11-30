import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  canActivate(): boolean {
    // Vérifier si on est dans le navigateur (pas côté serveur)
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');

      if (token) {
        return true;
      }

      this.router.navigate(['/login']);
      return false;
    }

    // Côté serveur : ne jamais bloquer (localStorage absent)
    return true;
  }
}
