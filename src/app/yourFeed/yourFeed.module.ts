import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {YourFeedComponent} from './components/yourFeed.component'
import {RouterModule} from '@angular/router'
import {FeedModule} from '../shared/modules/feed/feed.module'
import {BannerModule} from '../shared/modules/banner/banner.module'
import {PopularTagsModule} from '../shared/modules/populatTags/popularTags.module'
import {FeedToggleModule} from '../shared/modules/feedToggle/feedToggle.module'

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedToggleModule,
  ],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
