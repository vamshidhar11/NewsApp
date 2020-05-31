import { HeadlinesApi } from './api/headlines.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Headlines } from './models/headlines.model';
import { HeadlinesState } from './state/headlines.state';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news$: Observable<any>;

  constructor(
    private headlinesState: HeadlinesState,
    private headlinesApi: HeadlinesApi
  ) {
    this.news$ = this.headlinesState.getTopic$().pipe(
      switchMap(category => {
        console.log(category);
        const country = 'in';
        return this.headlinesApi.getTopHeadlines({ category, country });
      })
    );
    this.news$
      .pipe(map(data => data.articles))
      .subscribe(data => this.headlinesState.setNews(data));
  }

  public setNewsTopic(newslink: string = 'technology') {
    this.headlinesState.setTopic(newslink);
  }

  getHeadlines$(): Observable<Headlines[]> {
    return this.headlinesState.getHeadlines$();
  }
}
