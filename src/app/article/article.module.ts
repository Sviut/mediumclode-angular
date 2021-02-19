import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {GetArticleEffect} from './store/effects/articleFeed.effect'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {ArticleServices} from '../shared/services/article.services'
import {RouterModule} from '@angular/router'
import {ErrorMessageModule} from '../shared/modules/errorMessage/errorMessage.module'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {ArticleComponent} from './components/article.component'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [ArticleServices],
})
export class ArticleModule {}
