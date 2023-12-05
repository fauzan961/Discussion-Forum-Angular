import { Component, OnInit } from '@angular/core';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  faGit: any = faGithub

  constructor(private apiService: ApiService) { }

  authenticate() {
    this.apiService.gitAuthenticate()
  }

  ngOnInit() {

  }
}
