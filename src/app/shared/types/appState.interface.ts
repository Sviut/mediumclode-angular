import {AuthStateInterface} from '../../auth/types/authState.interface'
import {FeedStateInterface} from '../modules/feed/types/feedState.interface'
import {PopularTagsStateInterface} from '../modules/populatTags/types/popularTagsState.interface'
import {ArticleStateInterface} from '../../article/types/articleState.interface'

export interface AppStateInterface {
  auth?: AuthStateInterface
  feed?: FeedStateInterface
  popularTags?: PopularTagsStateInterface
  article?: ArticleStateInterface
}
