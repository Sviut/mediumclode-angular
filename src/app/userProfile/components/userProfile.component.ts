import {Component, OnDestroy, OnInit} from '@angular/core'
import {ProfileInterface} from '../../shared/types/profile.interface'
import {combineLatest, Observable, Subscription} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {ActivatedRoute, Router} from '@angular/router'
import {getUserProfileAction} from '../store/actions/getUserProfile.action'
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from '../store/selectors'
import {currentUserSelector} from '../../auth/store/selectors'
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-user-profile',
  templateUrl: 'userProfile.component.html',
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: ProfileInterface
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  userProfileSubscription: Subscription
  slug: string
  apiUrl: string
  isCurrentUserProfile$: Observable<boolean>

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(currentUserSelector)),
      this.store.pipe(select(userProfileSelector))
    ).pipe(
      map(([currentUser, userProfile]) => {
        return currentUser.username === userProfile.username
      })
    )

    this.route.params.subscribe((params) => {
      this.slug = params.slug
      this.fetchData()
    })
  }

  fetchData(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites')
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile) => {
        this.userProfile = userProfile
      })
  }
}
