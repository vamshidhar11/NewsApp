import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsCenterModule } from './news-center/news-center.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NewsCenterModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    CoreModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
