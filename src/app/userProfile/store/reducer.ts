import {UserProfileStateInterface} from '../types/userProfileState.interface'
import {Action, createReducer, on} from '@ngrx/store'
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from './getUserProfile.action'

const initialState: UserProfileStateInterface = {
  data: null,
  error: null,
  isLoading: false,
}

const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(
  state: UserProfileStateInterface,
  action: Action
): UserProfileStateInterface {
  return userProfileReducer(state, action)
}
