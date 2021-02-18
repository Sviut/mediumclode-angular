import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PopularTagService} from './services/popularTag.service'

@NgModule({
  imports: [CommonModule],
  providers: [PopularTagService],
})
export class PopularTagsModule {}
