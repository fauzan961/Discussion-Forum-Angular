import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';

import { faAdd } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  topic: any;
  faAdd: any = faAdd
  comments: any = []


  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const topicId = params['id'];
      this.apiService.getTopic(topicId).subscribe(
        data => {
          this.topic = data;
          this.topic = this.topic.data
          this.comments = this.topic.comments
        },
      );
    });
  }

}
