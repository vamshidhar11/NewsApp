import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCenterRoutingModule } from './news-center-routing.module';
import { NewsCenterComponent } from './news-center/news-center.component';
import { NewsCenterNavComponent } from './news-center-nav/news-center-nav.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsHeaderComponent } from './news-header/news-header.component';
import { NewsFooterComponent } from './news-footer/news-footer.component';

@NgModule({
  declarations: [NewsCenterComponent, NewsCenterNavComponent, NewsDetailComponent, NewsHeaderComponent, NewsFooterComponent],
  imports: [
    CommonModule,
    NewsCenterRoutingModule
  ]
})
export class NewsCenterModule { }
