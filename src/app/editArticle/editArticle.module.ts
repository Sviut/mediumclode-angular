import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CreateArticleComponent} from './components/createArticle.component'
import {RouterModule} from '@angular/router'
import {ArticleFormModule} from '../shared/modules/articleForm/articleForm.module'
import {EditArticleService} from './services/editArticle.service'
import {EffectsModule} from '@ngrx/effects'
import {UpdateArticleEffect} from './effects/updateArticle.effect'
import {StoreModule} from '@ngrx/store'
import {ArticleServices as SharedArticleService} from '../shared/services/article.services'
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
    EffectsModule.forFeature([UpdateArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
  ],
  declarations: [CreateArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
