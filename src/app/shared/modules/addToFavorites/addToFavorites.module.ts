import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AddToFavoritesComponent} from './components/addToFavorites.component'
import {AddToFavoritesService} from './services/addToFavorites.service'

@NgModule({
  imports: [CommonModule],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}
