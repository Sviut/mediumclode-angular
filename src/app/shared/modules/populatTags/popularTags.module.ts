import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PopularTagService} from './services/popularTag.service'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {GetPopularTagsEffect} from './store/effects/getPopularTags.effect'
import {PopularTagsComponent} from './components/popularTags.component'
import {LoadingModule} from '../loading/loading.module'
import {ErrorMessageModule} from '../errorMessage/errorMessage.module'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagService],
})
export class PopularTagsModule {}
