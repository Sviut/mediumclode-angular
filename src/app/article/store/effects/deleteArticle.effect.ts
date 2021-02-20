import {Injectable} from '@angular/core'
import {catchError, map, switchMap, tap} from 'rxjs/operators'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {ArticleServices} from '../../services/article.services'
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction,
} from '../actions/deleteArticle.action'
import {Router} from '@angular/router'

@Injectable()
export class DeleteArticleEffect {
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({slug}) => {
        return this.articleServices.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccessAction()
          }),
          catchError(() => {
            return of(deleteArticleFailureAction())
          })
        )
      })
    )
  )

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => {
          this.router.navigate(['/'])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private articleServices: ArticleServices,
    private router: Router
  ) {}
}
