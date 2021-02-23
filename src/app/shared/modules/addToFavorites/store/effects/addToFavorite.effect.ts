import {Injectable} from '@angular/core'
import {catchError, map, switchMap} from 'rxjs/operators'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {AddToFavoritesService} from '../../services/addToFavorites.service'
import {
  addToFavoriteAction,
  addTOFavoritesFailureAction,
  addTOFavoritesSuccessAction,
} from '../actions/addToFavorite.action'
import {ArticleInterface} from '../../../../types/article.interface'
import {of} from 'rxjs'

@Injectable()
export class AddToFavoriteEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoriteAction),
      switchMap(({isFavorited, slug}) => {
        const article$ = isFavorited
          ? this.addToFavoritesService.removeFavorites(slug)
          : this.addToFavoritesService.removeFavorites(slug)

        return article$.pipe(
          map((article: ArticleInterface) => {
            return addTOFavoritesSuccessAction({article})
          }),
          catchError(() => {
            return of(addTOFavoritesFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService
  ) {}
}
