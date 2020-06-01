import { HeadlinesApi } from './api/headlines.api';
import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
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
    const country = this.headlinesState
      .getCode$()
      .pipe(map(code => code.toLowerCase()));
    const topic = this.headlinesState.getTopic$();

    const news$ = combineLatest(topic, country);

    this.news$ = news$.pipe(
      map(([category, country]) => ({
        category,
        country
      })),
      switchMap(data => {
        console.log(data);
        const { category, country } = data;
        return this.headlinesApi.getTopHeadlines({ category, country });
      })
    );
    this.news$
      .pipe(
        map(data => data.articles),
        tap(data => console.log(data))
      )
      .subscribe(data => this.headlinesState.setNews(data));
  }

  public setNewsTopic(newslink: string = 'technology') {
    this.headlinesState.setTopic(newslink);
  }

  getHeadlines$(): Observable<Headlines[]> {
    return this.headlinesState.getHeadlines$();
  }
}
