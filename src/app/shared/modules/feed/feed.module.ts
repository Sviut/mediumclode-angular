import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeedComponent} from './components/feed.component'
import {EffectsModule} from '@ngrx/effects'
import {GetFeedEffect} from './store/effects/getFeed.effect'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {FeedServices} from './services/feed.services'
import {RouterModule} from '@angular/router'
import {ErrorMessageModule} from '../errorMessage/errorMessage.module'
import {LoadingModule} from '../loading/loading.module'
import {PaginationModule} from '../pagination/pagination.module'
import {TagListModule} from '../tagList/tag-list.module'
import {AddToFavoritesModule} from '../addToFavorites/addToFavorites.module'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedServices],
})
export class FeedModule {}
