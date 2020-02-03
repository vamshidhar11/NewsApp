import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-center-nav',
  templateUrl: './news-center-nav.component.html',
  styleUrls: ['./news-center-nav.component.scss']
})
export class NewsCenterNavComponent implements OnInit {
  selectedId: string;
  scrollPos: any;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private router: Router
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

    this.newsDetail('technology');
  }

  newsDetail(link: string) {
    this.newsService.get(link);
    this.selectedId = link;
  }
}
