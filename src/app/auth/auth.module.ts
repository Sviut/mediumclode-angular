import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {EffectsModule} from '@ngrx/effects'
import {CommonModule} from '@angular/common'
import {StoreModule} from '@ngrx/store'

import {BackendErrorMessagesModule} from '../modules/backendErrorMessages/backendErrorMessages.module'
import {RegisterComponent} from './components/register/register.component'
import {RegisterEffect} from './store/effects/register.effect'
import {AuthService} from './services/auth.service'
import {reducers} from './store/reducers'
import {PersistenceService} from '../shared/services/persistence.service'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
