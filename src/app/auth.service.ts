import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }


  loggedIn(): boolean {
    return !!this.cookieService.get('discuss-cookie');
  }

  logout() {
    this.cookieService.delete('discuss-cookie', '/')
    this.cookieService.delete('logged-user', '/')
    console.log(this.cookieService.get('discuss-cookie'))
  }

}
