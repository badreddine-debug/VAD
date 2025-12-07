import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private showHeaderSubject = new BehaviorSubject<boolean>(true);
  showHeader$ = this.showHeaderSubject.asObservable();

  show() {
    this.showHeaderSubject.next(true);
  }
  hide() {
    this.showHeaderSubject.next(false);
  }
}
