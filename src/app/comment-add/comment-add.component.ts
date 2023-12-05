import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'; // Importing from group and control

import { ApiService } from '../api.service';

import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';


@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent {

  commentForm = new FormGroup({
    message: new FormControl()
  });

  constructor(private apiService: ApiService, private router: Router,
    private route: ActivatedRoute) { }

  saveCommentForm() {
    if (this.commentForm.value.message) {
      this.route.params.subscribe((params) => {
        let data = { "topic_id": +params["topic_id"], "message": this.commentForm.value.message, "user_id": 1 }
        this.apiService.addComment(data).subscribe(
          data => {
            this.router.navigate(['/topics/', params["topic_id"]])
          })
      });

    }

  }

  formDisabled() {
    if (this.commentForm.value.message) {
      return false;
    }
    else return true;
  }

}
