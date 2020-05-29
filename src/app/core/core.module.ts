import { NewsFooterComponent } from './news-footer/news-footer.component';
import { NewsHeaderComponent } from './news-header/news-header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import { NewsCenterNavComponent } from './news-center-nav/news-center-nav.component';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

@NgModule({
  declarations: [
    NewsHeaderComponent,
    NewsFooterComponent,
    NewsCenterNavComponent
  ],
  imports: [
    CommonModule,
    SidebarModule.forRoot(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule
  ],
  providers: [],
  exports: [NewsHeaderComponent, NewsFooterComponent, NewsCenterNavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {}
