import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CreateArticleComponent} from './components/createArticle.component'
import {RouterModule} from '@angular/router'
import {ArticleFormModule} from '../shared/modules/articleForm/articleForm.module'
import {CreateArticleService} from './services/createArticle.service'
import {EffectsModule} from '@ngrx/effects'
import {CreateArticleEffect} from './effects/createArticle.effect'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'

const routes = [
  {
    path: 'article/new',
    component: CreateArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
