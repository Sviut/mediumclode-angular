import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {addToFavoriteAction} from '../store/actions/addToFavorite.action'

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

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProp
    this.isFavorited = this.isFavoritedProp
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoriteAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlug,
      })
    )
    if (this.isFavorited) {
      this.favoritesCount--
    } else {
      this.favoritesCount++
    }

    this.isFavorited = !this.isFavorited
  }
}
