import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: 'addToFavorites.component.html',
})
export class AddToFavoritesComponent implements OnInit {
  @Input() isFavoritedProp: boolean
  @Input() favoritesCountProp: number
  @Input() articleSlug: string

  favoritesCount: number
  isFavorited: boolean

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProp
    this.isFavorited = this.isFavoritedProp
  }

  handleLike(): void {
    if (this.isFavorited) {
      this.favoritesCount--
    } else {
      this.favoritesCount++
    }

    this.isFavorited = !this.isFavorited
  }
}
