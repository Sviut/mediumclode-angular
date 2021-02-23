import {ProfileInterface} from '../../shared/types/profile.interface'

export interface UserProfileStateInterface {
  data: ProfileInterface
  isLoading: boolean
  error: string | null
}
