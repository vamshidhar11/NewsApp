import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Subscription } from 'rxjs/internal/Subscription';
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
    this.newsSubscription = this.newsService.getNews$().subscribe(data => {
      this.newsContent = data.articles;
      this.newsService.setLoading$(false);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.newsSubscription.unsubscribe();
  }
}
