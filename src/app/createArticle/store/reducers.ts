import {CreateArticleStateInterface} from '../types/createArticleState.interface'
import {Action, createReducer, on} from '@ngrx/store'
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from './actions/createArticle.action'

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}

const createArticleReducer = createReducer(
  initialState,
  on(createArticleAction, (state) => ({
    ...state,
    isSubmitting: true,
  })),
  on(createArticleSuccessAction, (state) => ({
    ...state,
    isSubmitting: false,
  })),
  on(createArticleFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
)

export function reducers(
  state: CreateArticleStateInterface,
  action: Action
): CreateArticleStateInterface {
  return createArticleReducer(state, action)
}
