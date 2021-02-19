import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AppStateInterface} from '../../../types/appState.interface'
import {PopularTagsStateInterface} from '../types/popularTagsState.interface'

export const popularTagsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  PopularTagsStateInterface
>('popularTags')

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState) => popularTagsState.data
)

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState) => popularTagsState.isLoading
)

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState) => popularTagsState.error
)
