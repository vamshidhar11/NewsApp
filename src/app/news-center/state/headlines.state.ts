import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Headlines } from '../models/headlines.model';

@Injectable({
  providedIn: 'root'
})
export class HeadlinesState {
  private topic$ = new BehaviorSubject<string>('general');
  private countryCode$ = new BehaviorSubject<string>('us');
  private newsContent$ = new BehaviorSubject<Headlines[]>(null);

  getTopic$() {
    return this.topic$.asObservable();
  }
  setTopic(topic) {
    this.topic$.next(topic);
  }
  getCode$() {
    return this.countryCode$.asObservable();
  }
  setCode(topic) {
    this.countryCode$.next(topic);
  }
  getHeadlines$() {
    return this.newsContent$.asObservable();
  }
  setNews(news: Headlines[]) {
    this.newsContent$.next(news);
  }
}
