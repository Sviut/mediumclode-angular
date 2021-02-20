import {Injectable} from '@angular/core'
import {catchError, map, switchMap} from 'rxjs/operators'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {ArticleInterface} from '../../shared/types/article.interface'
import {ArticleServices as SharedArticleService} from '../../shared/services/article.services'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../store/actions/getArticle.action'

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({slug}) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({article})
          }),
          catchError(() => {
            return of(getArticleFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService
  ) {}
}
