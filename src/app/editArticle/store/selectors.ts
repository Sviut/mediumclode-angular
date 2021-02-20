import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from '../../shared/types/appState.interface'
import {EditArticleStateInterface} from '../types/editArticleState.interface'

export const createArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditArticleStateInterface
>('createArticle')

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: EditArticleStateInterface) =>
    createArticleState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: EditArticleStateInterface) =>
    createArticleState.validationErrors
)
