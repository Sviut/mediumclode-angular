import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {ArticleInterface} from '../../../../types/article.interface'

export const addTOFavoritesAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{isFavorited: boolean; slug: string}>()
)

export const addTOFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{article: ArticleInterface}>()
)

export const addTOFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
)
