import { Injectable, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
// import { EventEmitter } from 'events';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(
    private spinner: NgxSpinnerService,
    private httpClient: HttpClient
  ) {}
  @Output() newslink = new EventEmitter();
  private newsContent$ = new BehaviorSubject<any>({});
  private loading$ = new BehaviorSubject<any>(true);

  public get(newslink: string = 'technology'): Observable<any> {
    this.setLoading$(true);
    this.spinner.show();
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=in&' +
      `category=${newslink}&` +
      'apiKey=f211558e50c148689cb2bda17f750e62';

    return this.httpClient.get(url).pipe(
      tap(response => this.spinner.hide(), (error: any) => this.spinner.hide()))
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
}
