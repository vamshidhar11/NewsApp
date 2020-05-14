import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-header',
  templateUrl: './news-header.component.html',
  styleUrls: ['./news-header.component.scss']
})
export class NewsHeaderComponent implements OnInit {
  constructor() {}

  @Output() toggle: EventEmitter<any> = new EventEmitter();
  ngOnInit() {}
  _toggleOpened() {
    this.toggle.emit();
  }
}
