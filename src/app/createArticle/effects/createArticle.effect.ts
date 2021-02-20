import {Injectable} from '@angular/core'
import {catchError, map, switchMap, tap} from 'rxjs/operators'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'
import {CreateArticleService} from '../services/createArticle.service'
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '../store/actions/createArticle.action'
import {ArticleInterface} from '../../shared/types/article.interface'

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({articleInput}) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article: ArticleInterface) => {
            return createArticleSuccessAction({article})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createArticleFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({article}) => this.router.navigate(['/article', article.slug]))
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) {}
}
