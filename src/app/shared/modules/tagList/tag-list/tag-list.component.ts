import {Component, Input} from '@angular/core'
import {PopularTagType} from '../../../types/popularTagType'

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
})
export class TagListComponent {
  @Input() tags: PopularTagType[]
}
