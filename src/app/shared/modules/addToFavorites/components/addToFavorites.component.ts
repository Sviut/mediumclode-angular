import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: 'addToFavorites.component.html',
})
export class AddToFavoritesComponent {
  @Input() isFasorited: boolean
  @Input() favoritesCount: number
  @Input() articleSlug: string
}
