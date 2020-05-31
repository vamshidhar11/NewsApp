import { HeadlinesState } from './../../../news-center/state/headlines.state';
import { NewsService } from '../../../news-center/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-center-nav',
  templateUrl: './news-center-nav.component.html',
  styleUrls: ['./news-center-nav.component.scss']
})
export class NewsCenterNavComponent implements OnInit {
  selectedId: any;
  constructor(
    private headlinesState: HeadlinesState,
    private newsService: NewsService
  ) {}
  navBarLinks: Array<string> = new Array();
  ngOnInit() {
    this.navBarLinks = [
      'technology',
      'entertainment',
      'health',
      'science',
      'business',
      'sports'
    ];

    this.headlinesState.getTopic$().subscribe(data => {
      this.selectedId = data;
      console.log(data);
    });
  }
  selectTopic(topic) {
    this.newsService.setNewsTopic(topic);
  }
}
