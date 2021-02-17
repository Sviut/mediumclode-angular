import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FeedComponent} from './components/feed.component'
import {EffectsModule} from '@ngrx/effects'
import {GetFeedEffect} from './store/effects/getFeed.effect'

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([GetFeedEffect])],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class FeedModule {}
