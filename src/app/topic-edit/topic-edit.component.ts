import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from '../api.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.css']
})
export class TopicEditComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  topic_id: number = 0

  editForm = new FormGroup({
    title: new FormControl()
  })

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.topic_id = +params['id'];
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.editForm.get('title')?.setValue(params["title"]);
    });

  }

  saveEditForm() {
    if (this.editForm.value.title) {
      this.apiService.editTopic(this.topic_id, this.editForm.value.title).subscribe(
        data => {
          this.router.navigate(['/topics'])
        })
    }

  }

  editFormDisabled() {
    if (this.editForm.value.title) {
      return false;
    }
    else return true;
  }

}
