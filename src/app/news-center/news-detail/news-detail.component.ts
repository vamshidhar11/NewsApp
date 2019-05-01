import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsContent: any;
  selectedId: any;
  newslink: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.newsService.getNews.subscribe(arg => {
      this.newslink = arg;
      this.fetchNews();
    });
  }
  fetchNews() {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=in&' +
      `category=${this.newslink}&` +
      'apiKey=f211558e50c148689cb2bda17f750e62';

    const req = new Request(url);

    fetch(req).then(response => {
      response.json().then(data => {
        console.log(data);
        this.newsContent = data.articles;
      });
    });
  }
}
