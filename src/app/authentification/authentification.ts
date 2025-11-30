import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../Service/Authentification/loginService';
import { Router } from '@angular/router';
import { UserModel } from '../Model/User';

@Component({
  selector: 'app-authentification',
  imports: [ReactiveFormsModule],
  templateUrl: './authentification.html',
  styleUrl: './authentification.css',
})
export class Authentification {
  authService = inject(Login);
  route = inject(Router);

  userModel: UserModel = new UserModel({});

  errorMessage: string | null = null;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor() {}

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.userModel.email = email;
    this.userModel.password = password;

    this.authService.getOneUser(this.userModel).subscribe({
      next: (res) => {
        if (res != 'Vide') {
          localStorage.setItem('token', res);
          this.errorMessage = null;
        } else {
          this.errorMessage = 'Email ou mot de passe invalide';
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Email ou mot de passe invalide';
      },
    });
    this.route.navigate(['/home']);
  }
}
