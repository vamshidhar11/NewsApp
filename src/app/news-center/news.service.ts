import { Injectable, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  @Output() getNews = new EventEmitter<string>();
  constructor() {}

  NewsDetail(link) {
    this.getNews.emit(link);
  }
}
