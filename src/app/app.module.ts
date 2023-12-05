import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';

import { Routes, RouterModule } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '**', redirectTo: '/auth', pathMatch: 'full' },

]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AuthModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
