import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (state.url === '/auth') {
      if (!this.authService.loggedIn()) {
        return true
      }
      this.router.navigate(['/topics']);
      return false
    } else if (!this.authService.loggedIn()) {
      this.router.navigate(['/auth']);
      return false;
    } else {
      return true;
    }
  }
}
