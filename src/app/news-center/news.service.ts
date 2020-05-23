import { environment } from './../../environments/environment';
import { Injectable, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}
  @Output() newslink = new EventEmitter();
  private newsContent$ = new BehaviorSubject<any>({});
  private topic$ = new BehaviorSubject<any>({});
  private loading$ = new BehaviorSubject<any>(true);

  public get(newslink: string = 'technology') {
    this.topic$.next(newslink);
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=in&' +
      `category=${newslink}&` +
      `apiKey=${environment.newsApiKey}`;

    return this.httpClient
      .get(url)
      .pipe()
      .subscribe(response => {
        this.newsContent$.next(response);
      });
  }
  setLoading$(boolean) {
    this.loading$.next(boolean);
  }
  getLoading$() {
    return this.loading$.asObservable();
  }
  getNews$() {
    return this.newsContent$.asObservable();
  }
  setNews(news: string) {
    this.newsContent$.next(news);
  }
  getTopic() {
    return this.topic$.asObservable();
  }
}
