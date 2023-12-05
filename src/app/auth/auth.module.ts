import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'auth', component: SignInComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/auth', pathMatch: 'full' }


];

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],

  exports: [RouterModule]
})
export class AuthModule { }
