import { Injectable, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
// import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  @Output() getNews = new EventEmitter<string>();

  constructor(private spinner: NgxSpinnerService) {}

  NewsDetail(link) {
    this.spinner.show(undefined, {
      type: 'square-spin',
      size: 'medium',
      bdColor: 'white',
      color: '#230c33',
      fullScreen: false
    });
    this.getNews.emit(link);
  }
}
