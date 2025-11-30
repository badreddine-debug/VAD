import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { UserModel } from '../../Model/User';
import { Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Login {
  private apiIrl = 'http://localhost:5000/api/User/AccederUSer';
  error: string = 'error';
  private platformId = inject(PLATFORM_ID);
  router = inject(Router);

  constructor(private http: HttpClient) {}

  getOneUser(user: UserModel): Observable<string> {
    let token = this.http.post(this.apiIrl, user, { responseType: 'text' });
    token == null ? this.error : token;
    return token;
  }

  // Pour éviter les erreurs "localStorage is not defined"
  private isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }
}
