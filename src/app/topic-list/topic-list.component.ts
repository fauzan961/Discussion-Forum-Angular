import { Component, OnInit, } from '@angular/core';

import { ApiService } from '../api.service';

import { faTrash, faEdit, faAdd } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  faEdit: any = faEdit
  faTrash: any = faTrash
  faAdd: any = faAdd
  userToken: any
  currentUser: any = null

  topics: any = []

  constructor(private apiService: ApiService, private cookieService: CookieService, private authService: AuthService) {

  }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.currentUser = this.cookieService.get("logged-user")
    }
    this.apiService.getTopics().subscribe(
      data => {
        this.topics = data;
        this.topics = this.topics.data
      },
    );
  }



}
