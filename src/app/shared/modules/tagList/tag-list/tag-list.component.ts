import {Component, Input} from '@angular/core'
import {PopularTagTypeType} from '../../../types/popularTagType.type'

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
})
export class TagListComponent {
  @Input() tags: PopularTagTypeType[]
}
