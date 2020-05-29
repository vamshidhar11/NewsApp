import { environment } from './../../environments/environment';
import { Injectable, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { AngularFireFunctions } from '@angular/fire/functions';

export class topHeadlines {
  country: string;
  category: string;
  sources: string;
  q: string;
}
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(
    private httpClient: HttpClient,
    private functions: AngularFireFunctions
  ) {}
  @Output() newslink = new EventEmitter();
  private newsContent$ = new BehaviorSubject<any>([]);
  private topic$ = new BehaviorSubject<any>({});
  private loading$ = new BehaviorSubject<any>(true);

  public get(newslink: string = 'technology') {
    this.topic$.next(newslink);
    const url1 =
      'http://localhost:5001/news-center-a8a2e/us-central1/headlines';

    const url2 =
      'https://us-central1-news-center-a8a2e.cloudfunctions.net/headlines';
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=in&' +
      `category=${newslink}&` +
      `apiKey=${environment.newsApiKey}`;

    const params: topHeadlines = new topHeadlines();
    params.country = 'in';
    this.getTopic().subscribe(data => {
      params.category = data;
      console.log(data);
    });
    console.log(params);
    this.callHeadlinesHttp(url2, params);
    // this.callHeadlines(params);
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

  callHeadlines(data) {
    const callable = this.functions.httpsCallable('headlines');

    // Create an Observable and pass any data you want to the function
    const obs: Observable<any> = callable(data);
    obs
      .pipe(
        map(data => {
          console.log(data);
          this.newsContent$.next(data.articles);
        })
      )
      .subscribe(res => {
        console.log(res);
      });
  }

  callHeadlinesHttp(url, params) {
    return this.httpClient
      .post(url, params)
      .pipe(
        map((data: { articles }) => {
          this.newsContent$.next(data.articles);
        })
      )
      .subscribe();
  }
}
