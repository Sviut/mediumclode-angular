import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {UserProfileComponent} from './components/userProfile.component'
import {RouterModule} from '@angular/router'

const routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [UserProfileComponent],
})
export class UserProfileModule {}