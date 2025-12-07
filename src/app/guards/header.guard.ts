import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { HeaderService } from '../Service/Header/header-service';

export const headerGuard: CanActivateFn = (route, state) => {
  const headerService = inject(HeaderService);

  // Liste des routes où le header doit être caché
  const hideOnRoutes = ['/login'];
  debugger;
  if (hideOnRoutes.includes(state.url)) {
    headerService.hide();
  } else {
    headerService.show();
  }

  return true;
};
