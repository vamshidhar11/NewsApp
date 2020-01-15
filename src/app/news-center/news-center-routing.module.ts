import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsCenterComponent } from './news-center/news-center.component';


// const routes: Routes = [];
const newsCenterRoutes: Routes = [
  {
    path: 'news-center',
    component: NewsCenterComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(newsCenterRoutes)],
  exports: [RouterModule]
})
export class NewsCenterRoutingModule {}
