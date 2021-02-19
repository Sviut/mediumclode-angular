import {AuthStateInterface} from '../../auth/types/authState.interface'
import {FeedStateInterface} from '../modules/feed/types/feedState.interface'
import {PopularTagsStateInterface} from '../modules/populatTags/types/popularTagsState.interface'

export interface AppStateInterface {
  auth?: AuthStateInterface
  feed?: FeedStateInterface
  popularTags?: PopularTagsStateInterface
}
