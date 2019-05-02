import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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

    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.selectedId = params.get('id');
    //   })
    // );
  }
  newsDetail(link) {
    this.newsService.NewsDetail(link);
    this.selectedId = link;
  }
}
