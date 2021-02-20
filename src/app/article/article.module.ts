import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {GetArticleEffect} from './store/effects/getArticle.effect'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {ArticleServices as SharedArticleServices} from '../shared/services/article.services'
import {RouterModule} from '@angular/router'
import {ErrorMessageModule} from '../shared/modules/errorMessage/errorMessage.module'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {ArticleComponent} from './components/article.component'
import {TagListModule} from '../shared/modules/tagList/tag-list.module'
import {ArticleServices} from './services/article.services'

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
    TagListModule,
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [SharedArticleServices, ArticleServices],
})
export class ArticleModule {}
