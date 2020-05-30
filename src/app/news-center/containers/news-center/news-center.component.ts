import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-news-center',
  templateUrl: './news-center.component.html',
  styleUrls: ['./news-center.component.scss']
})
export class NewsCenterComponent implements OnInit {
  newsContent: any;
  newsSubscription: Subscription;
  constructor(public newsService: NewsService) {}

  ngOnInit() {
    this.newsContent = this.newsService.getNews$();
  }
}
