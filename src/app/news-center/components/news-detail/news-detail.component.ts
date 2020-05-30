import { fadeAnimation } from './../../../shared/animations/fadeInRoute';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class NewsDetailComponent implements OnInit {
  @Input() news: any;
  constructor() {}

  ngOnInit() {
    console.log(this.news);
  }
}
