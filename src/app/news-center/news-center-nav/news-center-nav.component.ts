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
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private router: Router,
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
    this.router.navigate(['/news-center', 'technology']);
    setTimeout(() => {
    this.newsDetail('technology');
    }, 1);
  }
  newsDetail(link: string) {
    this.newsService.NewsDetail(link);
    this.selectedId = link;
  }
}
