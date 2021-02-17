import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {EffectsModule} from '@ngrx/effects'
import {CommonModule} from '@angular/common'
import {StoreModule} from '@ngrx/store'

import {reducers} from './store/reducers'
import {BackendErrorMessagesModule} from '../shared/modules/backendErrorMessages/backendErrorMessages.module'
import {RegisterComponent} from './components/register/register.component'
import {RegisterEffect} from './store/effects/register.effect'
import {AuthService} from './services/auth.service'
import {PersistenceService} from '../shared/services/persistence.service'
import {LoginComponent} from './components/login/login.component'
import {LoginEffect} from './store/effects/login.effect'
import {GetCurrentUserEffect} from './store/effects/getCurrentUser.effect'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
