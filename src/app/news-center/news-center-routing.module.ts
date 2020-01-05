import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsCenterComponent } from './news-center/news-center.component';
import { NewsCenterNavComponent } from './news-center-nav/news-center-nav.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

// const routes: Routes = [];
const newsCenterRoutes: Routes = [
  {
    path: 'news-center',
    component: NewsCenterComponent
    // children: [
    //   {
    //     path: '',
    //     component: NewsCenterNavComponent,
    //     children: [
    //       {
    //         path: 'technology',
    //         component: NewsDetailComponent
    //       },
    //       {
    //         path: ':link',
    //         component: NewsDetailComponent
    //       }
    //     ]
    //   }
    // ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(newsCenterRoutes)],
  exports: [RouterModule]
})
export class NewsCenterRoutingModule {}
