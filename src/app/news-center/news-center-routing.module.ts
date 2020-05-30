import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsCenterComponent } from './containers/news-center/news-center.component';

// const routes: Routes = [];
const newsCenterRoutes: Routes = [
  {
    path: '',
    component: NewsCenterComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(newsCenterRoutes)],
  exports: [RouterModule]
})
export class NewsCenterRoutingModule {}
