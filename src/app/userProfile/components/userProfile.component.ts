import {Component, OnInit} from '@angular/core'
import {ProfileInterface} from '../../shared/types/profile.interface'
import {Observable, Subscription} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {ActivatedRoute} from '@angular/router'
import {getUserProfileAction} from '../store/actions/getUserProfile.action'
import {errorSelector, isLoadingSelector} from '../store/selectors'

@Component({
  selector: 'app-user-profile',
  templateUrl: 'userProfile.component.html',
})
export class UserProfileComponent implements OnInit {
  userProfile: ProfileInterface
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  userProfileSubscription: Subscription
  slug: string

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }
}
