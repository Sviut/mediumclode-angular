import {EditArticleStateInterface} from '../types/editArticleState.interface'
import {Action, createReducer, on} from '@ngrx/store'
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from './actions/editArticle.action'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.action'

const initialState: EditArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  article: null,
}

const editArticleReducer = createReducer(
  initialState,
  on(updateArticleAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(updateArticleSuccessAction, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(updateArticleFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  })),
  on(getArticleAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getArticleSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    article: action.article,
  })),
  on(getArticleFailureAction, (state) => ({
    ...state,
    isLoading: false,
  }))
)

export function reducers(
  state: EditArticleStateInterface,
  action: Action
): EditArticleStateInterface {
  return editArticleReducer(state, action)
}
