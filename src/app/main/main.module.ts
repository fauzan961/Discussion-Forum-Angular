import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { ReactiveFormsModule } from '@angular/forms';


import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent } from '../topic-list/topic-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthGuard } from '../auth.guard';

import { ApiService } from '../api.service';
import { TopicDetailsComponent } from '../topic-details/topic-details.component';
import { TopicDeleteComponent } from '../topic-delete/topic-delete.component';
import { TopicAddComponent } from '../topic-add/topic-add.component';
import { TopicEditComponent } from '../topic-edit/topic-edit.component';
import { CommentAddComponent } from '../comment-add/comment-add.component';
import { AuthService } from '../auth.service';

const routes: Routes = [
  { path: 'add-topics', component: TopicAddComponent, canActivate: [AuthGuard] },
  { path: 'topics', component: TopicListComponent },
  { path: 'topics/', redirectTo: 'topics', pathMatch: 'full' },
  { path: 'topics/:id/edit', component: TopicEditComponent, canActivate: [AuthGuard] },
  { path: 'topics/:id/delete', component: TopicDeleteComponent, canActivate: [AuthGuard] },
  { path: 'topics/:id', component: TopicDetailsComponent, canActivate: [AuthGuard] },
  { path: 'add-comments/:topic_id', component: CommentAddComponent, canActivate: [AuthGuard] },

];


@NgModule({
  declarations: [
    MainComponent,
    TopicListComponent,
    TopicAddComponent,
    TopicEditComponent,
    TopicDetailsComponent,
    CommentAddComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [ApiService, AuthService]
})
export class MainModule { }
