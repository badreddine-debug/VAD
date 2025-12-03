import { Component, inject, signal } from '@angular/core';
import { Login } from '../Service/Authentification/loginService';
import { Router } from '@angular/router';
import { UserModel } from '../Model/User';
import { Field, form, required } from '@angular/forms/signals';
import { AcountUser, AcountUserSchema } from '../Model/AcountUser';

@Component({
  selector: 'app-authentification',
  imports: [Field],
  templateUrl: './authentification.html',
  styleUrl: './authentification.css',
})
export class Authentification {
  authService = inject(Login);
  route = inject(Router);

  userModel = signal<UserModel>(new UserModel({}));
  account = signal<AcountUser>({ email: '', password: '' });

  protected readonly errorMessage = signal<string | null>(null);
  protected readonly loginform = form(this.account, AcountUserSchema);

  constructor() {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.userModel().email = this.loginform().value().email;
    this.userModel().password = this.loginform().value().password;

    this.authService.getOneUser(this.userModel()).subscribe({
      next: (res) => {
        if (res != 'Vide') {
          localStorage.setItem('token', res);
          this.errorMessage.set(null);
          this.route.navigate(['/home']);
        } else {
          this.errorMessage.set('Email ou mot de passe invalide');
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage.set('Email ou mot de passe invalide');
      },
    });
  }
}
