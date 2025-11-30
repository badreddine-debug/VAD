import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Login } from '../Service/Authentification/loginService';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  serviceAuthentification = inject(Login);

  deconnection() {
    this.serviceAuthentification.logout();
  }
}
