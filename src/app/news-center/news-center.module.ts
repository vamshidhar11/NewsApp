import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCenterRoutingModule } from './news-center-routing.module';
import { NewsCenterComponent } from './news-center/news-center.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [NewsCenterComponent, NewsDetailComponent],
  imports: [CommonModule, NewsCenterRoutingModule, NgxSpinnerModule],
  exports: [NewsCenterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsCenterModule {}
