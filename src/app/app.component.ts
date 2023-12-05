import { Component } from '@angular/core';

import { Router } from '@angular/router';


import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'discuss';

  constructor(private router: Router, public _authService: AuthService) { }

  logout() {
    this._authService.logout()
    this.router.navigate(['/auth']);

  }

  redirectToLogin() {
    this.router.navigate(['/auth']);
  }

  redirectToTopics() {
    this.router.navigate(['/topics']);
  }
}
