import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../../../news-center/news.service';

@Component({
  selector: 'app-news-header',
  templateUrl: './news-header.component.html',
  styleUrls: ['./news-header.component.scss']
})
export class NewsHeaderComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  @Output() toggle: EventEmitter<any> = new EventEmitter();
  ngOnInit() {}
  _toggleOpened() {
    this.toggle.emit();
  }

  onClick() {
    this.newsService.setNewsTopic('general');
  }
}
