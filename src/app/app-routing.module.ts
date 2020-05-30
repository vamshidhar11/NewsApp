import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'news-center', pathMatch: 'full' },
  {
    path: 'news-center',
    loadChildren: () =>
      import('./news-center/news-center.module').then(m => m.NewsCenterModule)
  },
  { path: '**', redirectTo: 'news-center' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
