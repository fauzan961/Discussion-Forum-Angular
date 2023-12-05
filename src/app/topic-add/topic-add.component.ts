import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'; // Importing from group and control

import { CookieService } from 'ngx-cookie-service';

import { ApiService } from '../api.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-topic-add',
  templateUrl: './topic-add.component.html',
  styleUrls: ['./topic-add.component.css']
})
export class TopicAddComponent {

  constructor(
    private apiService: ApiService,
    private router: Router,
    private cookieService: CookieService) { }

  topicForm = new FormGroup({
    title: new FormControl()
  });

  saveForm() {
    if (this.topicForm.value.title) {
      const token = this.cookieService.get('discuss-cookie')
      let data = { "token": token, "title": this.topicForm.value.title }
      this.apiService.addTopic(data).subscribe(
        data => {
          this.router.navigate(['/topics'])
        })
    }

  }

  formDisabled() {
    if (this.topicForm.value.title) {
      return false;
    }
    else return true;
  }

}
