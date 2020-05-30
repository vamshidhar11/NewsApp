import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCenterRoutingModule } from './news-center-routing.module';
import { NewsCenterComponent } from './containers/news-center/news-center.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

@NgModule({
  declarations: [NewsCenterComponent, NewsDetailComponent],
  imports: [CommonModule, NewsCenterRoutingModule],
  exports: [NewsCenterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsCenterModule {}
