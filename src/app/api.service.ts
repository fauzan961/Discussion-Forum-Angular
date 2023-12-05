import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:4000/api/topics/'
  commentUrl = 'http://127.0.0.1:4000/api/comments/'
  githubAuthUrl = 'http://localhost:4000/api/auth/github/';


  constructor(
    private httpClient: HttpClient
  ) { }

  getTopics() {
    return this.httpClient.get(this.baseUrl)
  }

  getTopic(id: number) {
    return this.httpClient.get(`${this.baseUrl}${id}/`)
  }

  deleteTopic(id: number) {
    return this.httpClient.delete(`${this.baseUrl}${id}/`)
  }

  addTopic(topicData: any) {
    return this.httpClient.post(this.baseUrl, { "topic": { "title": topicData.title, "token": topicData.token } })
  }

  editTopic(id: number, title: any) {
    return this.httpClient.put(`${this.baseUrl}${id}/`, { "topic": { "title": title } })
  }

  gitAuthenticate() {
    window.location.href = `${this.githubAuthUrl}`;
  }

  addComment(commentData: any) {
    return this.httpClient.post(this.commentUrl, { "comment": commentData })
  }
}
