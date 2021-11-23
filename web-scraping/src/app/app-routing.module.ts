import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
},
{
  path: 'year',
  component: ArticleListComponent
},
{
  path: 'article/:title',
  component: ArticleComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
