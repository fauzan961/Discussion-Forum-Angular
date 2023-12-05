import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';

import { Location } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-delete',
  templateUrl: './topic-delete.component.html',
  styleUrls: ['./topic-delete.component.css']
})
export class TopicDeleteComponent implements OnInit {

  topic: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    private router: Router
  ) { }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const topicId = params['id'];
      this.apiService.getTopic(topicId).subscribe(
        data => {
          this.topic = data;
          this.topic = this.topic.data
        },
      );
    });
  }

  removeTopic(value: any, topicId: any) {
    if (value == 'yes') {
      this.apiService.deleteTopic(topicId).subscribe(
        data => {
          this.router.navigate(['/topics'])

        }
      )
    }

    else {
      this.location.back()  // Redirects to the previous URL
    }
  }

}
